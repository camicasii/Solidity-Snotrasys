export const  tokenAddress = process.env.REACT_APP_TOKEN_ADDRESS
export const  contractAddress =process.env.REACT_APP_CONTRACT_ADDRESS

export const abiToken = [	{
    "inputs": [
        {
            "internalType": "address",
            "name": "src",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "guy",
            "type": "address"
        }
    ],
    "name": "allowance",
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
    "inputs": [
        {
            "internalType": "address",
            "name": "guy",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "guy",
            "type": "address"
        }
    ],
    "name": "balanceOf",
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
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
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
    "inputs": [
        {
            "internalType": "address",
            "name": "dst",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "src",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "dst",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "wad",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
}
]
export const abiContract =[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "devAddr",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "SecAddr",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "markAddrs",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "projectAddrs",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "partAddr",
				"type": "address"
			},
			{
				"internalType": "contract IBEP20",
				"name": "token_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			}
		],
		"name": "FeePayed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "Newbie",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefBonus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Reinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "checkUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBonusPoolPercent",
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
		"name": "getComunityBonus",
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
		"name": "getContractBalance",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getNextUserAssignment",
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
		"name": "getPublicData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalUsers_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalInvested_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalReinvested_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalWithdrawn_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDeposits_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "roidBase",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bonusPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "comunityBonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentRoi",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxProfit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minDeposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "daysFormdeploy",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalWithdrawn_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDeposits_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalBonus_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalreinvest_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "hold_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nextAssignment_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOfDeposits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkpoint",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isUser_",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "referrer_",
				"type": "address"
			},
			{
				"internalType": "uint256[3]",
				"name": "referrerCount_",
				"type": "uint256[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserDepositInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "initAmount_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "withdrawn_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeStart_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reinvested_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxProfit",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserholdRate",
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
		"inputs": [
			{
				"internalType": "address payable",
				"name": "referrer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "investAmt",
				"type": "uint256"
			}
		],
		"name": "invest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "isActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketingAdress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "partnerAdress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectAdress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reinvestment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "secureAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "depositsLength",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reinvested",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkpoint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lasReinvest",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "referrer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

