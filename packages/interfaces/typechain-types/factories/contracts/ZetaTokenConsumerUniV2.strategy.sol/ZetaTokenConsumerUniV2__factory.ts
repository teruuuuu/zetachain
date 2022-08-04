/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZetaTokenConsumerUniV2,
  ZetaTokenConsumerUniV2Interface,
} from "../../../contracts/ZetaTokenConsumerUniV2.strategy.sol/ZetaTokenConsumerUniV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniswapV2Router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InputCantBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "EthExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "TokenExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForEth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getEthFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getTokenFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "getZetaFromEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
    ],
    name: "getZetaFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zetaToken",
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
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620026aa380380620026aa83398181016040528101906200003791906200024e565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806200009f5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b15620000d7576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018c57600080fd5b505afa158015620001a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c791906200021c565b73ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050620002e8565b6000815190506200021681620002ce565b92915050565b600060208284031215620002355762000234620002c9565b5b6000620002458482850162000205565b91505092915050565b60008060408385031215620002685762000267620002c9565b5b6000620002788582860162000205565b92505060206200028b8582860162000205565b9150509250929050565b6000620002a282620002a9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620002d98162000295565b8114620002e557600080fd5b50565b60805160601c60a05160601c60c05160601c6122e8620003c26000396000818161033401528181610598015281816108e101528181610b0f01528181610ca501528181610f0701526112700152600081816102c30152818161046a015281816106f10152818161086f01528181610ac501528181610b3101528181610bc501528181610ebd01528181610f29015281816110110152611140015260008181610254015281816105e2015281816106820152818161080001528181610c3401528181610f710152818161108001526111af01526122e86000f3fe60806040526004361061004a5760003560e01c8063013b2ff81461004f57806321e093b11461007f5780632405620a146100aa57806354c49a2a146100e7578063a53fb10b14610124575b600080fd5b610069600480360381019061006491906118ff565b610161565b6040516100769190611dc9565b60405180910390f35b34801561008b57600080fd5b50610094610468565b6040516100a19190611c4c565b60405180910390f35b3480156100b657600080fd5b506100d160048036038101906100cc919061193f565b61048c565b6040516100de9190611dc9565b60405180910390f35b3480156100f357600080fd5b5061010e600480360381019061010991906119a6565b610a1a565b60405161011b9190611dc9565b60405180910390f35b34801561013057600080fd5b5061014b6004803603810190610146919061193f565b610ddb565b6040516101589190611dc9565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156101c9576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000341415610204576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600267ffffffffffffffff81111561022157610220612103565b5b60405190808252806020026020018201604052801561024f5781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610287576102866120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106102f6576102f56120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637ff36ab53486858960c84261037f9190611f6f565b6040518663ffffffff1660e01b815260040161039e9493929190611de4565b6000604051808303818588803b1580156103b757600080fd5b505af11580156103cb573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f820116820180604052508101906103f591906119f9565b9050600081600184516104089190611fc5565b81518110610419576104186120d4565b5b602002602001015190507f87890b0a30955b1db16cc894fbe24779ae05d9f337bfe8b6dfc0809b5bf9da113482604051610454929190611e30565b60405180910390a180935050505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806104f45750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561052b576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000821415610566576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105933330848673ffffffffffffffffffffffffffffffffffffffff166113a9909392919063ffffffff16565b6105de7f0000000000000000000000000000000000000000000000000000000000000000838573ffffffffffffffffffffffffffffffffffffffff166114329092919063ffffffff16565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561076357600267ffffffffffffffff81111561064f5761064e612103565b5b60405190808252806020026020018201604052801561067d5781602001602082028036833780820191505090505b5090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106106b5576106b46120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610724576107236120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506108dd565b600367ffffffffffffffff81111561077e5761077d612103565b5b6040519080825280602002602001820160405280156107ac5781602001602082028036833780820191505090505b50905083816000815181106107c4576107c36120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610833576108326120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816002815181106108a2576108a16120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed17398588858b60c84261092c9190611f6f565b6040518663ffffffff1660e01b815260040161094c959493929190611e59565b600060405180830381600087803b15801561096657600080fd5b505af115801561097a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109a391906119f9565b9050600081600184516109b69190611fc5565b815181106109c7576109c66120d4565b5b602002602001015190507f017190d3d99ee6d8dd0604ef1e71ff9802810c6485f57c9b2ed6169848dd119f868683604051610a0493929190611cf0565b60405180910390a1809350505050949350505050565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610a82576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000821415610abd576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b0a3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166113a9909392919063ffffffff16565b610b757f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166114329092919063ffffffff16565b6000600267ffffffffffffffff811115610b9257610b91612103565b5b604051908082528060200260200182016040528015610bc05781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610bf857610bf76120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110610c6757610c666120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318cbafe58587858a60c842610cf09190611f6f565b6040518663ffffffff1660e01b8152600401610d10959493929190611e59565b600060405180830381600087803b158015610d2a57600080fd5b505af1158015610d3e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d6791906119f9565b905060008160018451610d7a9190611fc5565b81518110610d8b57610d8a6120d4565b5b602002602001015190507f74e171117e91660f493740924d8bad0caf48dc4fbccb767fb05935397a2c17ae8582604051610dc6929190611e30565b60405180910390a18093505050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610e435750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610e7a576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000821415610eb5576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f023330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166113a9909392919063ffffffff16565b610f6d7f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166114329092919063ffffffff16565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156110f257600267ffffffffffffffff811115610fde57610fdd612103565b5b60405190808252806020026020018201604052801561100c5781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110611044576110436120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106110b3576110b26120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061126c565b600367ffffffffffffffff81111561110d5761110c612103565b5b60405190808252806020026020018201604052801561113b5781602001602082028036833780820191505090505b5090507f000000000000000000000000000000000000000000000000000000000000000081600081518110611173576111726120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106111e2576111e16120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508381600281518110611231576112306120d4565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166338ed17398588858b60c8426112bb9190611f6f565b6040518663ffffffff1660e01b81526004016112db959493929190611e59565b600060405180830381600087803b1580156112f557600080fd5b505af1158015611309573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061133291906119f9565b9050600081600184516113459190611fc5565b81518110611356576113556120d4565b5b602002602001015190507f0a7cb8f6e1d29e616c1209a3f418c17b3a9137005377f6dd072217b1ede2573b86868360405161139393929190611cf0565b60405180910390a1809350505050949350505050565b61142c846323b872dd60e01b8585856040516024016113ca93929190611c90565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611590565b50505050565b60008114806114cb575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611479929190611c67565b60206040518083038186803b15801561149157600080fd5b505afa1580156114a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c99190611a6f565b145b61150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190611da9565b60405180910390fd5b61158b8363095ea7b360e01b8484604051602401611529929190611cc7565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611590565b505050565b60006115f2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116579092919063ffffffff16565b905060008151111561165257808060200190518101906116129190611a42565b611651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164890611d89565b60405180910390fd5b5b505050565b6060611666848460008561166f565b90509392505050565b6060824710156116b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ab90611d49565b60405180910390fd5b6116bd85611783565b6116fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f390611d69565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117259190611c35565b60006040518083038185875af1925050503d8060008114611762576040519150601f19603f3d011682016040523d82523d6000602084013e611767565b606091505b50915091506117778282866117a6565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156117b657829050611806565b6000835111156117c95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117fd9190611d27565b60405180910390fd5b9392505050565b600061182061181b84611ed8565b611eb3565b9050808382526020820190508285602086028201111561184357611842612137565b5b60005b85811015611873578161185988826118ea565b845260208401935060208301925050600181019050611846565b5050509392505050565b60008135905061188c8161226d565b92915050565b600082601f8301126118a7576118a6612132565b5b81516118b784826020860161180d565b91505092915050565b6000815190506118cf81612284565b92915050565b6000813590506118e48161229b565b92915050565b6000815190506118f98161229b565b92915050565b6000806040838503121561191657611915612141565b5b60006119248582860161187d565b9250506020611935858286016118d5565b9150509250929050565b6000806000806080858703121561195957611958612141565b5b60006119678782880161187d565b9450506020611978878288016118d5565b93505060406119898782880161187d565b925050606061199a878288016118d5565b91505092959194509250565b6000806000606084860312156119bf576119be612141565b5b60006119cd8682870161187d565b93505060206119de868287016118d5565b92505060406119ef868287016118d5565b9150509250925092565b600060208284031215611a0f57611a0e612141565b5b600082015167ffffffffffffffff811115611a2d57611a2c61213c565b5b611a3984828501611892565b91505092915050565b600060208284031215611a5857611a57612141565b5b6000611a66848285016118c0565b91505092915050565b600060208284031215611a8557611a84612141565b5b6000611a93848285016118ea565b91505092915050565b6000611aa88383611ab4565b60208301905092915050565b611abd81611ff9565b82525050565b611acc81611ff9565b82525050565b6000611add82611f14565b611ae78185611f42565b9350611af283611f04565b8060005b83811015611b23578151611b0a8882611a9c565b9750611b1583611f35565b925050600181019050611af6565b5085935050505092915050565b6000611b3b82611f1f565b611b458185611f53565b9350611b55818560208601612041565b80840191505092915050565b6000611b6c82611f2a565b611b768185611f5e565b9350611b86818560208601612041565b611b8f81612146565b840191505092915050565b6000611ba7602683611f5e565b9150611bb282612157565b604082019050919050565b6000611bca601d83611f5e565b9150611bd5826121a6565b602082019050919050565b6000611bed602a83611f5e565b9150611bf8826121cf565b604082019050919050565b6000611c10603683611f5e565b9150611c1b8261221e565b604082019050919050565b611c2f81612037565b82525050565b6000611c418284611b30565b915081905092915050565b6000602082019050611c616000830184611ac3565b92915050565b6000604082019050611c7c6000830185611ac3565b611c896020830184611ac3565b9392505050565b6000606082019050611ca56000830186611ac3565b611cb26020830185611ac3565b611cbf6040830184611c26565b949350505050565b6000604082019050611cdc6000830185611ac3565b611ce96020830184611c26565b9392505050565b6000606082019050611d056000830186611ac3565b611d126020830185611c26565b611d1f6040830184611c26565b949350505050565b60006020820190508181036000830152611d418184611b61565b905092915050565b60006020820190508181036000830152611d6281611b9a565b9050919050565b60006020820190508181036000830152611d8281611bbd565b9050919050565b60006020820190508181036000830152611da281611be0565b9050919050565b60006020820190508181036000830152611dc281611c03565b9050919050565b6000602082019050611dde6000830184611c26565b92915050565b6000608082019050611df96000830187611c26565b8181036020830152611e0b8186611ad2565b9050611e1a6040830185611ac3565b611e276060830184611c26565b95945050505050565b6000604082019050611e456000830185611c26565b611e526020830184611c26565b9392505050565b600060a082019050611e6e6000830188611c26565b611e7b6020830187611c26565b8181036040830152611e8d8186611ad2565b9050611e9c6060830185611ac3565b611ea96080830184611c26565b9695505050505050565b6000611ebd611ece565b9050611ec98282612074565b919050565b6000604051905090565b600067ffffffffffffffff821115611ef357611ef2612103565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611f7a82612037565b9150611f8583612037565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fba57611fb96120a5565b5b828201905092915050565b6000611fd082612037565b9150611fdb83612037565b925082821015611fee57611fed6120a5565b5b828203905092915050565b600061200482612017565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561205f578082015181840152602081019050612044565b8381111561206e576000848401525b50505050565b61207d82612146565b810181811067ffffffffffffffff8211171561209c5761209b612103565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b61227681611ff9565b811461228157600080fd5b50565b61228d8161200b565b811461229857600080fd5b50565b6122a481612037565b81146122af57600080fd5b5056fea26469706673582212209d0e3cafa4547673e4834e1381def595dd0be20bbbac9eb70f3c9b961a8cdbca64736f6c63430008070033";

type ZetaTokenConsumerUniV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaTokenConsumerUniV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaTokenConsumerUniV2__factory extends ContractFactory {
  constructor(...args: ZetaTokenConsumerUniV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    zetaToken_: string,
    uniswapV2Router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZetaTokenConsumerUniV2> {
    return super.deploy(
      zetaToken_,
      uniswapV2Router_,
      overrides || {}
    ) as Promise<ZetaTokenConsumerUniV2>;
  }
  override getDeployTransaction(
    zetaToken_: string,
    uniswapV2Router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      zetaToken_,
      uniswapV2Router_,
      overrides || {}
    );
  }
  override attach(address: string): ZetaTokenConsumerUniV2 {
    return super.attach(address) as ZetaTokenConsumerUniV2;
  }
  override connect(signer: Signer): ZetaTokenConsumerUniV2__factory {
    return super.connect(signer) as ZetaTokenConsumerUniV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaTokenConsumerUniV2Interface {
    return new utils.Interface(_abi) as ZetaTokenConsumerUniV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaTokenConsumerUniV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZetaTokenConsumerUniV2;
  }
}
