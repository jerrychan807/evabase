'use strict';
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import '@openzeppelin/hardhat-upgrades';
import { ethers } from 'hardhat';
// eslint-disable-next-line node/no-missing-import
// import { store } from '../help';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ownerO = await ethers.getSigners();
  console.log(`deployer owner : ${ownerO[0].address}`);

  const evaSafes = '0x2A06320BA361F25A9cCadFFf382355f8D6c6e794';
  const data =
    // eslint-disable-next-line max-len
    '0xab834bab000000000000000000000000dd54d660178b28f6033a953b0e55073cfa7e37440000000000000000000000008e36203bd495a999fb455c417fd253bec3b43382000000000000000000000000e4633285c38571878fe2155046505e45a6deaedb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045b594792a5cdc008d0de1c1d69faa3d16b3ddc100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dd54d660178b28f6033a953b0e55073cfa7e3744000000000000000000000000e4633285c38571878fe2155046505e45a6deaedb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005b3256965e7c3cf26e11fcaf296dfc8807c0107300000000000000000000000045b594792a5cdc008d0de1c1d69faa3d16b3ddc10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fa000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013fbe85edc9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062713ea00000000000000000000000000000000000000000000000000000000000000000c85c46b37c3a5359cd70f9b64b1e662f73de23b34388eec35b2627f659ff19a700000000000000000000000000000000000000000000000000000000000000fa000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013fbe85edc900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006263f0e3000000000000000000000000000000000000000000000000000000006329b244bf26e2770104d6eacb7050c89bf2f6aa3f19bb8b62bd8b618fbc28692435742c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000006a000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000008e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000b20000000000000000000000000000000000000000000000000000000000000001b000000000000000000000000000000000000000000000000000000000000001bc87c2f2481cfa2d0737efe4d8795229510acf185409840daa856e57b03a8d7bf3de849e7125a85d9be5ce6886a066ddc9862f5736250a9c22f83d3739a10f029c87c2f2481cfa2d0737efe4d8795229510acf185409840daa856e57b03a8d7bf3de849e7125a85d9be5ce6886a066ddc9862f5736250a9c22f83d3739a10f029000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a5950000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120809a949890c599b9c1c8c2f2d1efdec2dd9ea0000000000000000000000009af3444aacb49006a19ecdd70da21490cf5ca3940000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a595000000000000000000000000e4633285c38571878fe2155046505e45a6deaedb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000009af3444aacb49006a19ecdd70da21490cf5ca3940000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e400000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

  const EvaSafes = await ethers.getContractFactory('EvaSafes');
  const evaSafesContract = EvaSafes.attach(evaSafes);
  const safesOwner = await evaSafesContract.owner();
  console.log(`safesOwner: ${safesOwner}`);

  // const evaBaseServerBot = await ethers.getContractFactory('EvaBaseServerBot');
  // const dataAfter = evaBaseServerBot.interface.encodeFunctionData('performUpkeep', [data]);

  // console.log(dataAfter);

  const dataAfter = EvaSafes.interface.encodeFunctionData('proxy', [
    '0xdd54d660178b28f6033a953b0e55073cfa7e3744',
    0,
    data,
  ]);
  console.log(dataAfter);
  // const tx = await evaSafesContract.proxy('0xdd54d660178b28f6033a953b0e55073cfa7e3744', 0, data, {
  //   value: ethers.utils.parseEther('0.09'),
  // });
  // const g = await tx.wait();
  // console.log((await g).transactionHash);

  // console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
