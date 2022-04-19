/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EvaFlowChecker,
  EvaFlowCheckerInterface,
} from "../EvaFlowChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_config",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "keepbotId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastMoveTime",
        type: "uint256",
      },
      {
        internalType: "enum KeepNetWork",
        name: "keepNetWork",
        type: "uint8",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "needExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkGasLimitMin",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      {
        internalType: "contract IEvabaseConfig",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516111b83803806111b883398101604081905261002f9161009d565b6001600160a01b0381166100785760405162461bcd60e51b815260206004820152600c60248201526b0c2c8c8cae6e640d2e64060f60a31b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b03929092169190911790556100cb565b6000602082840312156100ae578081fd5b81516001600160a01b03811681146100c4578182fd5b9392505050565b6110de806100da6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063506b7336146100465780635545462e1461006957806379502c551461008a575b600080fd5b61004f619c4081565b60405163ffffffff90911681526020015b60405180910390f35b61007c610077366004610e08565b6100b5565b604051610060929190610f50565b60005461009d906001600160a01b031681565b6040516001600160a01b039091168152602001610060565b6000606060008060009054906101000a90046001600160a01b03166001600160a01b031663f23062606040518163ffffffff1660e01b815260040160206040518083038186803b15801561010857600080fd5b505afa15801561011c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101409190610e40565b6000805460405163055c2f8760e41b815292935090916001600160a01b03909116906355c2f87090610176908890600401610f86565b60206040518083038186803b15801561018e57600080fd5b505afa1580156101a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c69190610e40565b905060008060009054906101000a90046001600160a01b03166001600160a01b031663d8de65876040518163ffffffff1660e01b815260040160206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190610c89565b6001600160a01b0316637e0f9cb9876040518263ffffffff1660e01b815260040161027a9190610f86565b60206040518083038186803b15801561029257600080fd5b505afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca9190610df0565b905060006102d88289610312565b90506000806102f0848663ffffffff168d898761039c565b915091506103008282868c6104fb565b97509750505050505050935093915050565b6000600a6103208342610fea565b1061035c57604080514260208201528491016040516020818303038152906040528051906020012060001c610355919061104c565b9050610396565b828260405160200161037091815260200190565b6040516020818303038152906040528051906020012060001c610393919061104c565b90505b92915050565b6000806000861180156103af5750600087115b80156103bb5750600085115b6103f95760405162461bcd60e51b81526004016103f0906020808252600490820152630677420360e41b604082015260600190565b60405180910390fd5b600086888161041857634e487b7160e01b600052601260045260246000fd5b049050600087898161043a57634e487b7160e01b600052601260045260246000fd5b069050801561044a576001909101905b63ffffffff861682118015610463578663ffffffff1692505b82600189030286019450828802860193508985106104d35789850394508984039350858511156104ce578985816104aa57634e487b7160e01b600052601260045260246000fd5b0694508984816104ca57634e487b7160e01b600052601260045260246000fd5b0693505b6104ee565b898411156104ee5760018a85030393508584106104ee578593505b5050509550959350505050565b60006060600080606080888a111561061157886105188b8a610fea565b6105229190610fd2565b61052d906001610fd2565b92508267ffffffffffffffff81111561055657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561057f578160200160208202803683370190505b5091508267ffffffffffffffff8111156105a957634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156105dc57816020015b60608152602001906001900390816105c75790505b5090506105ed8a898484888c610704565b909550909250905061060460008a8484888c610704565b90955090925090506106df565b61061b8a8a610fea565b92508267ffffffffffffffff81111561064457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561066d578160200160208202803683370190505b5091508267ffffffffffffffff81111561069757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156106ca57816020015b60608152602001906001900390816106b55790505b5090506106db8a8a8484888c610704565b5050505b8151156106eb57600195505b6106f58282610ba1565b94505050505094509492505050565b606060008181895b89811015610b895760005a905060008060009054906101000a90046001600160a01b03166001600160a01b031663d8de65876040518163ffffffff1660e01b815260040160206040518083038186803b15801561076857600080fd5b505afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190610c89565b6001600160a01b0316630e1c060f848a6040518363ffffffff1660e01b81526004016107cd929190610f94565b60206040518083038186803b1580156107e557600080fd5b505afa1580156107f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081d9190610df0565b90508015610b7457600080546040805163d8de658760e01b8152905183926001600160a01b03169163d8de6587916004808301926020929190829003018186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a29190610c89565b6001600160a01b03166308c49b8d846040518263ffffffff1660e01b81526004016108cf91815260200190565b60006040518083038186803b1580156108e757600080fd5b505afa1580156108fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109239190810190610cf6565b608001516001600160a01b031663c64b3bb560008054906101000a90046001600160a01b03166001600160a01b031663d8de65876040518163ffffffff1660e01b815260040160206040518083038186803b15801561098157600080fd5b505afa158015610995573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b99190610c89565b6001600160a01b03166308c49b8d866040518263ffffffff1660e01b81526004016109e691815260200190565b60006040518083038186803b1580156109fe57600080fd5b505afa158015610a12573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3a9190810190610cf6565b61010001516040518263ffffffff1660e01b8152600401610a5b9190610f73565b60006040518083038186803b158015610a7357600080fd5b505afa158015610a87573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610aaf9190810190610ca3565b9150915060005a905080610ac38689610fd2565b610acd9190610fea565b9650621e8480871180610ae15750619c4081105b15610afb578d8c8e99509950995050505050505050610b95565b8215610b7057838e8d610b0d81611031565b9e5081518110610b2d57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152818d8d610b4481611031565b9e5081518110610b6457634e487b7160e01b600052603260045260246000fd5b60200260200101819052505b5050505b50508080610b8190611031565b91505061070c565b50878688935093509350505b96509650969350505050565b60608282604051602001610bb6929190610eb9565b604051602081830303815290604052905092915050565b80516001600160a01b0381168114610be457600080fd5b919050565b600082601f830112610bf9578081fd5b815167ffffffffffffffff80821115610c1457610c14611082565b604051601f8301601f19908116603f01168101908282118183101715610c3c57610c3c611082565b81604052838152866020858801011115610c54578485fd5b610c65846020830160208901611001565b9695505050505050565b805160068110610be457600080fd5b8051610be481611098565b600060208284031215610c9a578081fd5b61039382610bcd565b60008060408385031215610cb5578081fd5b82518015158114610cc4578182fd5b602084015190925067ffffffffffffffff811115610ce0578182fd5b610cec85828601610be9565b9150509250929050565b600060208284031215610d07578081fd5b815167ffffffffffffffff80821115610d1e578283fd5b908301906101208286031215610d32578283fd5b610d3a610fa8565b610d4383610c6f565b8152610d5160208401610c7e565b6020820152610d6260408401610bcd565b6040820152610d7360608401610bcd565b6060820152610d8460808401610bcd565b608082015260a083015160a082015260c083015160c082015260e083015182811115610dae578485fd5b610dba87828601610be9565b60e0830152506101008084015183811115610dd3578586fd5b610ddf88828701610be9565b918301919091525095945050505050565b600060208284031215610e01578081fd5b5051919050565b600080600060608486031215610e1c578081fd5b83359250602084013591506040840135610e3581611098565b809150509250925092565b600060208284031215610e51578081fd5b815163ffffffff81168114610e64578182fd5b9392505050565b60008151808452610e83816020860160208601611001565b601f01601f19169290920160200192915050565b60048110610eb557634e487b7160e01b600052602160045260246000fd5b9052565b604080825283519082018190526000906020906060840190828701845b82811015610ef257815184529284019290840190600101610ed6565b50505083810382850152845180825282820190600581901b83018401878501865b83811015610f4157601f19868403018552610f2f838351610e6b565b94870194925090860190600101610f13565b50909998505050505050505050565b8215158152604060208201526000610f6b6040830184610e6b565b949350505050565b6020815260006103936020830184610e6b565b602081016103968284610e97565b82815260408101610e646020830184610e97565b604051610120810167ffffffffffffffff81118282101715610fcc57610fcc611082565b60405290565b60008219821115610fe557610fe561106c565b500190565b600082821015610ffc57610ffc61106c565b500390565b60005b8381101561101c578181015183820152602001611004565b8381111561102b576000848401525b50505050565b60006000198214156110455761104561106c565b5060010190565b60008261106757634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600481106110a557600080fd5b5056fea264697066735822122084c07224c4a6b8761ab4e689951cd23dcad347f187797e33370379052a7944a664736f6c63430008040033";

export class EvaFlowChecker__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _config: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EvaFlowChecker> {
    return super.deploy(_config, overrides || {}) as Promise<EvaFlowChecker>;
  }
  getDeployTransaction(
    _config: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_config, overrides || {});
  }
  attach(address: string): EvaFlowChecker {
    return super.attach(address) as EvaFlowChecker;
  }
  connect(signer: Signer): EvaFlowChecker__factory {
    return super.connect(signer) as EvaFlowChecker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EvaFlowCheckerInterface {
    return new utils.Interface(_abi) as EvaFlowCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EvaFlowChecker {
    return new Contract(address, _abi, signerOrProvider) as EvaFlowChecker;
  }
}
