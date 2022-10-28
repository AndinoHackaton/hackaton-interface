const Artifacts = {
  address: {
    97: '0x5cB76AdFB8CCAae34a176545178b9E5bDfB4ADb2'//contrato desplegado,
  },
  abi: [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_creador",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "nombreNegocio",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "montoMeta",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				}
			],
			"name": "CreatorPaid",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "contributor",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "currentTotal",
					"type": "uint256"
				}
			],
			"name": "FundingReceived",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "amountGoal",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "checkIfFundingComplete",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "contribute",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "contributions",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "creator",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "currentBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getDetails",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "walletNegocio",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "nombreNegocio",
					"type": "string"
				},
				{
					"internalType": "enum SwapInstantaneo.State",
					"name": "currentState",
					"type": "uint8"
				},
				{
					"internalType": "uint256",
					"name": "fondoActual",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "montoMeta",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "state",
			"outputs": [
				{
					"internalType": "enum SwapInstantaneo.State",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "swapBNBtoBUSD",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "title",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
}

export default Artifacts
