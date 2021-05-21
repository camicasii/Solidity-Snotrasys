

const  BSCmain =[
    {
      chainId: `0x${parseInt(process.env.REACT_APP_CHAIN_ID_MAIN, 10).toString(16)}`,
      chainName: 'Binance Smart Chain Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/'],
    },
  ]

const  BSCTest =[
    {
        chainId: `0x${parseInt(process.env.REACT_APP_CHAIN_ID_TEST, 10).toString(16)}`,
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-2-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
  ]

  export default [BSCmain,BSCTest]