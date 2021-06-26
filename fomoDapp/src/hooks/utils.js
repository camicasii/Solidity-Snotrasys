import Web3 from 'web3';
import {abiContract as contractAbi,contractAddress } from "./abiHelpers";
import PROVIDER from './provider'

const refHandler =()=>{
  let referrer =""
  new URLSearchParams(window.location.search).forEach((value,key,c)=>{      
    if(key="ref")
    referrer=value
})         
  if(!window.web3.utils.isAddress(referrer)){
    const random = Math.floor(Math.random() * 100)
    /*referrer =random>45?'0xD43b7B9146636ac5FAAbF6AD95376F6e74fE863c':
    "0x71a2106A4508D754122d0D33F2deCCDA40Ba4adb"        */
    referrer ='0xD43b7B9146636ac5FAAbF6AD95376F6e74fE863c'
  }   
  return referrer  
}

const getWeb3 = () => {
  return new Promise(async(resolve, reject) => {    
      // Modern dapp browsers...
      if (window.ethereum) {        
        try {
          if(window.ethereum.isMetaMask){
          const provider = window.ethereum  
          if(provider){
          await provider.request({
            method: 'wallet_addEthereumChain',
            params:PROVIDER[process.env.REACT_APP_CHAIN],
          })
        }
      }
        window.web3 = new Web3(window.ethereum);
        let accounts = await window.web3.eth.getAccounts();      
        await window.ethereum.enable();
        console.log('ethereum',accounts);         
        resolve(true);
        } catch (error) {
          reject(undefined);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        window.web3 = web3
        console.log("Injected web3 detected.");
        resolve(true);
      }
      // Fallback to localhost; use dev console port by default...
      else {
       /* const provider = new Web3.providers.HttpProvider(
          "http://localhost:9545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");*/
        resolve(undefined);
      }    
  });
};

const getContracts = ()=> {    
  const smartContract = new window.web3.eth.Contract(
    contractAbi,
    contractAddress
  );
  return smartContract;  
}

export { getWeb3, getContracts, refHandler };
