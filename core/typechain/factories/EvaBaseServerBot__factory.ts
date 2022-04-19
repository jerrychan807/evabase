/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EvaBaseServerBot,
  EvaBaseServerBotInterface,
} from "../EvaBaseServerBot";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_config",
        type: "address",
      },
      {
        internalType: "address",
        name: "_evaFlowChecker",
        type: "address",
      },
      {
        internalType: "enum KeepNetWork",
        name: "keepNetWork",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "SetEBSKeepStatus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_uint",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "_bytes",
        type: "bytes[]",
      },
    ],
    name: "encodeTwoArr",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "encodeUintAndBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_uint",
        type: "uint256[]",
      },
    ],
    name: "encodeUints",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "evaFlowChecker",
    outputs: [
      {
        internalType: "contract EvaFlowChecker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "keepBotId",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "keeps",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "keep",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setEBSKeepStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f7038038062000f70833981016040819052620000349162000292565b6200003f3362000223565b6001600160a01b0383166200008a5760405162461bcd60e51b815260206004820152600c60248201526b0c2c8c8cae6e640d2e64060f60a31b60448201526064015b60405180910390fd5b6001600160a01b038216620000d15760405162461bcd60e51b815260206004820152600c60248201526b0c2c8c8cae6e640d2e64060f60a31b604482015260640162000081565b600080546001600160a01b038086166001600160a01b031992831617835560018054868316931692909217825533835260036020526040808420805460ff191690931790925591549051639ffd119960e01b8152911690639ffd11999062000140903090859060040162000331565b600060405180830381600087803b1580156200015b57600080fd5b505af115801562000170573d6000803e3d6000fd5b505060005460405163055c2f8760e41b81526001600160a01b0390911692506355c2f8709150620001a690849060040162000350565b60206040518083038186803b158015620001bf57600080fd5b505afa158015620001d4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001fa9190620002e1565b600260146101000a81548163ffffffff021916908363ffffffff16021790555050505062000366565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200028d57600080fd5b919050565b600080600060608486031215620002a7578283fd5b620002b28462000275565b9250620002c26020850162000275565b9150604084015160048110620002d6578182fd5b809150509250925092565b600060208284031215620002f3578081fd5b815163ffffffff8116811462000307578182fd5b9392505050565b600481106200032d57634e487b7160e01b600052602160045260246000fd5b9052565b6001600160a01b0383168152604081016200030760208301846200030e565b602081016200036082846200030e565b92915050565b610bfa80620003766000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638318342e1161008c578063a49fe72411610066578063a49fe724146101b0578063c156e62f146101e3578063f2fde38b146101f6578063fbf8eacc1461020957600080fd5b80638318342e146101795780638da5cb5b1461018c5780638df48aa11461019d57600080fd5b80632ba14042146100d45780634585e33b146100e957806353a69052146100fc5780636e04ff0d14610125578063715018a61461014657806379502c551461014e575b600080fd5b6100e76100e2366004610795565b610235565b005b6100e76100f73660046108de565b6102c7565b61010f61010a36600461094b565b61030a565b60405161011c9190610ab2565b60405180910390f35b6101386101333660046108de565b610336565b60405161011c929190610a97565b6100e7610384565b600054610161906001600160a01b031681565b6040516001600160a01b03909116815260200161011c565b61010f6101873660046107d1565b6103ba565b6002546001600160a01b0316610161565b600154610161906001600160a01b031681565b6101d36101be366004610756565b60036020526000908152604090205460ff1681565b604051901515815260200161011c565b61010f6101f136600461080c565b6103e3565b6100e7610204366004610756565b6103f8565b60025461022090600160a01b900463ffffffff1681565b60405163ffffffff909116815260200161011c565b6002546001600160a01b031633146102685760405162461bcd60e51b815260040161025f90610b0f565b60405180910390fd5b6001600160a01b038216600081815260036020908152604091829020805460ff191685151590811790915591519182527fc2ba3c8a415fa8c0e016b11260f7eab627aa1781681db036e86b836f3bf1a581910160405180910390a25050565b61030682828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061049392505050565b5050565b6060828260405160200161031f929190610ac5565b604051602081830303815290604052905092915050565b6000606061037984848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061062592505050565b915091509250929050565b6002546001600160a01b031633146103ae5760405162461bcd60e51b815260040161025f90610b0f565b6103b8600061062a565b565b6060816040516020016103cd9190610a13565b6040516020818303038152906040529050919050565b6060828260405160200161031f929190610a26565b6002546001600160a01b031633146104225760405162461bcd60e51b815260040161025f90610b0f565b6001600160a01b0381166104875760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161025f565b6104908161062a565b50565b60008151116104e45760405162461bcd60e51b815260206004820152601960248201527f6578656320646174612073686f756c64206e6f74206e756c6c00000000000000604482015260640161025f565b3360009081526003602052604090205460ff1661053c5760405162461bcd60e51b81526020600482015260166024820152751b9bdd081858dd1a5d9948115d9850985cd948189bdd60521b604482015260640161025f565b60008054906101000a90046001600160a01b03166001600160a01b031663d8de65876040518163ffffffff1660e01b815260040160206040518083038186803b15801561058857600080fd5b505afa15801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c09190610779565b6001600160a01b0316635090321e82627a12006040518363ffffffff1660e01b81526004016105f0929190610ae7565b600060405180830381600087803b15801561060a57600080fd5b505af115801561061e573d6000803e3d6000fd5b5050505050565b600191565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082601f83011261068c578081fd5b813560206106a161069c83610b75565b610b44565b80838252828201915082860187848660051b89010111156106c0578586fd5b855b858110156106de578135845292840192908401906001016106c2565b5090979650505050505050565b600082601f8301126106fb578081fd5b813567ffffffffffffffff81111561071557610715610b99565b610728601f8201601f1916602001610b44565b81815284602083860101111561073c578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610767578081fd5b813561077281610baf565b9392505050565b60006020828403121561078a578081fd5b815161077281610baf565b600080604083850312156107a7578081fd5b82356107b281610baf565b9150602083013580151581146107c6578182fd5b809150509250929050565b6000602082840312156107e2578081fd5b813567ffffffffffffffff8111156107f8578182fd5b6108048482850161067c565b949350505050565b6000806040838503121561081e578182fd5b823567ffffffffffffffff80821115610835578384fd5b6108418683870161067c565b9350602091508185013581811115610857578384fd5b8501601f81018713610867578384fd5b803561087561069c82610b75565b8082825285820191508584018a878560051b8701011115610894578788fd5b875b848110156108cd578135878111156108ac57898afd5b6108ba8d8a838a01016106eb565b8552509287019290870190600101610896565b50979a909950975050505050505050565b600080602083850312156108f0578182fd5b823567ffffffffffffffff80821115610907578384fd5b818501915085601f83011261091a578384fd5b813581811115610928578485fd5b866020828501011115610939578485fd5b60209290920196919550909350505050565b6000806040838503121561095d578182fd5b823567ffffffffffffffff811115610973578283fd5b61097f858286016106eb565b95602094909401359450505050565b6000815180845260208085019450808401835b838110156109bd578151875295820195908201906001016109a1565b509495945050505050565b60008151808452815b818110156109ed576020818501810151868301820152016109d1565b818111156109fe5782602083870101525b50601f01601f19169290920160200192915050565b602081526000610772602083018461098e565b604081526000610a39604083018561098e565b6020838203818501528185518084528284019150828160051b850101838801865b83811015610a8857601f19878403018552610a768383516109c8565b94860194925090850190600101610a5a565b50909998505050505050505050565b821515815260406020820152600061080460408301846109c8565b60208152600061077260208301846109c8565b604081526000610ad860408301856109c8565b90508260208301529392505050565b604081526000610afa60408301856109c8565b905063ffffffff831660208301529392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b6d57610b6d610b99565b604052919050565b600067ffffffffffffffff821115610b8f57610b8f610b99565b5060051b60200190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461049057600080fdfea26469706673582212208025a3704847ce57f0761f4c02cc3c6aa440ee2cf05cc1ec63c16e41c012a13564736f6c63430008040033";

export class EvaBaseServerBot__factory extends ContractFactory {
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
    _evaFlowChecker: string,
    keepNetWork: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EvaBaseServerBot> {
    return super.deploy(
      _config,
      _evaFlowChecker,
      keepNetWork,
      overrides || {}
    ) as Promise<EvaBaseServerBot>;
  }
  getDeployTransaction(
    _config: string,
    _evaFlowChecker: string,
    keepNetWork: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _config,
      _evaFlowChecker,
      keepNetWork,
      overrides || {}
    );
  }
  attach(address: string): EvaBaseServerBot {
    return super.attach(address) as EvaBaseServerBot;
  }
  connect(signer: Signer): EvaBaseServerBot__factory {
    return super.connect(signer) as EvaBaseServerBot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EvaBaseServerBotInterface {
    return new utils.Interface(_abi) as EvaBaseServerBotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EvaBaseServerBot {
    return new Contract(address, _abi, signerOrProvider) as EvaBaseServerBot;
  }
}
