//SPDX-License-Identifier: MIT
//Create by Openflow.network core team.
pragma solidity ^0.8.0;

import "../interfaces/IEvaFlow.sol";
import "../interfaces/IEvaFlowProxy.sol";

contract MockTimeFlow is IEvaFlowProxy, IEvaFlow {
    Task[] public tasks;

    event Executed(uint256 indexed id, uint256 times);
    event Closed(uint256 indexed id);

    struct Task {
        bool paused;
        bool expired;
        bool canceled;
        uint256 lastTime;
        uint256 times;
    }

    function taskCount() external view returns (uint256) {
        return tasks.length;
    }

    function setPause(uint256 id, bool paused) external {
        tasks[id].paused = paused;
    }

    function setExpire(uint256 id, bool expired) external {
        tasks[id].expired = expired;
    }

    function multicall(address, bytes memory) external pure override {
        revert("F");
    }

    function createTask() external returns (uint256 id) {
        tasks.push(Task({paused: false, expired: false, canceled: false, lastTime: 0, times: 0})); //solhint-disable
        return tasks.length - 1;
    }

    function check(bytes calldata checkData)
        external
        view
        override
        returns (bool needExecute, bytes memory executeData)
    {
        uint256 id = abi.decode(checkData, (uint256));

        needExecute = tasks[id].lastTime <= block.timestamp - 1 minutes; //solhint-disable
        executeData = checkData;
    }

    function execute(bytes memory executeData) external override returns (bool canDestoryFlow) {
        uint256 id = abi.decode(executeData, (uint256));
        require(tasks[id].lastTime <= block.timestamp - 1 minutes, "not started");
        tasks[id].lastTime = block.timestamp;
        tasks[id].times += 1;
        emit Executed(id, tasks[id].times);

        canDestoryFlow = tasks[id].times >= 3;
    }

    function needClose(bytes memory checkData) public view override returns (bool yes) {
        uint256 id = abi.decode(checkData, (uint256));
        yes = tasks[id].expired;
    }

    function close(bytes memory checkData) external override {
        require(needClose(checkData), "cant cancel");
        uint256 id = abi.decode(checkData, (uint256));
        require(!tasks[id].canceled, "taks has canceled");
        tasks[id].canceled = true;
        emit Closed(id);
    }

    function create(
        IEvaFlowController ser,
        MockTimeFlow flow,
        KeepNetWork network,
        uint256 gasFee
    ) external payable {
        uint256 orderId = flow.createTask();
        // 3. register listen order task on Evabase
        ser.registerFlow{value: gasFee}(
            "EvabaseLO",
            network,
            address(flow),
            abi.encode(orderId) //checkdata
        );
    }

    function pauseFlow(IEvaFlowController ser, uint256 flowId) external override {
        ser.pauseFlow(flowId);
        (MockTimeFlow flow, uint256 orderKey) = _getInfo(ser, flowId);
        flow.setPause(orderKey, true);
    }

    function startFlow(IEvaFlowController ser, uint256 flowId) external override {
        ser.startFlow(flowId);
        (MockTimeFlow exchange, uint256 orderKey) = _getInfo(ser, flowId);
        exchange.setPause(orderKey, false);
    }

    function destroyFlow(IEvaFlowController ser, uint256 flowId) external override {
        ser.destroyFlow(flowId);
        (MockTimeFlow exchange, uint256 orderKey) = _getInfo(ser, flowId);
        exchange.setPause(orderKey, false);
    }

    function _getInfo(IEvaFlowController ser, uint256 flowId)
        private
        view
        returns (MockTimeFlow mockflow, uint256 key)
    {
        (address flow, bytes memory checkdata) = ser.getFlowCheckInfo(flowId);
        require(flow != address(0), "empty");

        mockflow = MockTimeFlow(flow);
        key = abi.decode(checkdata, (uint256));
    }
}
