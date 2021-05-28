import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, Text } from "@pancakeswap-libs/uikit";
import { getWeb3,getContracts } from "../../hooks/utils";
const HeroSection = ( {load} ) => {
  const state = useSelector(state => state.contract)
  const [balance, setBalance] = useState('10000')
  const [youCake, setyouCake] = useState('0')
  useEffect(() => {    
    if(state.web3Load){
    const init = async() =>{
      let [accounts] = await window.web3.eth.getAccounts();
        const {token,smartContract} = getContracts(window.web3)        
        const balanceOf = await token.methods.balanceOf(accounts).call()
        const  data = await smartContract.methods.getPublicData().call()
        setyouCake(window.web3.utils.fromWei(balanceOf))
        setBalance(window.web3.utils.fromWei(data.totalInvested_))
        //console.log(data,'data');
      }         
      init()
    }    
    return () => {      
    }
  }, [state.web3Load,state.address])
  return(
    <>
       <section className="grid grid-cols-1 md:grid-cols-4 py-12 gap-6 ">
    
     


  <div className="md:px-0 px-16 sm:py-0 py-8 ml-3 sm:mr-3 mr-0">
        <div className=" rounded-lg shadow bg-white px-2 py-2     
      ">
        <a href="https://hazecrypto.net/cakevault/" target="_blank">
          <img className="w-20 h-20 absolute -mt-9 transform md:scale-110 duration-700" src="/tarro.png"/>
        <h1 bold className="font-semibold text-lg text-center ml-2 pl-16 px-2 py-4 text-gray-400
        
          ">Your balance Cake : <span className="text-orange-primary">{youCake}</span></h1>

        </a>
             </div>
    <img className="md:w-[111px] w-[120px] h-[35px] absolute -mt-1 ml-4 transform md:scale-110 duration-700" src="/border-b.png"/>
    <img className="md:w-[125px] w-[183px] h-[35px] absolute ml-32 -mt-1 transform md:scale-110 duration-700" src="/border-b.png"/>
      
      
      </div>





         <div className="md:px-0 px-16 sm:py-0 py-4 -ml-3 sm:mr-3 mr-0">
        <div className=" rounded-lg shadow bg-white px-2 py-2     
      ">
        <a href="https://hazecrypto.net/cakevault/" target="_blank">
          <img className="w-20 h-20 absolute -mt-9 transform md:scale-110 duration-700" src="/tarro.png"/>
        <h1 bold className="font-semibold text-lg text-center pl-16 px-2 py-4 text-gray-400
        
          ">Total Cake stake: <span className="text-orange-primary">{balance}</span></h1>

        </a>
             </div>
<img className="w-[51px] h-[35px] absolute -mt-1 transform md:scale-110 duration-700" src="/border-b.png"/>
<img className="w-[83px] h-[35px] absolute ml-12 -mt-1 transform md:scale-110 duration-700" src="/border-b.png"/>
       <img className="md:w-[80px] w-[110px] h-[35px] absolute ml-32 -mt-1 transform md:scale-110 duration-700" src="/border-b.png"/>
       <img className="md:w-[84px] sm:w-[20px] w-[140px] h-[35px] absolute md:ml-52 ml-56 -mt-1 transform md:scale-110 duration-700" src="/border-b.png"/>
      </div>




      <div className="md:px-8 px-16 py-2 sm:ml-8 ml-0">
        <div className=" rounded bg-gradient-to-br from-orange-primary to-[#FFB000] px-2 py-1     
      ">
        <a href={process.env.REACT_APP_CONTRACT_URL} target="_blank">
         
        <h1 bold className="font-semibold text-lg text-center  px-2 py-4 text-white
        
        ">Contract</h1>
        </a>
             </div>
      </div>
      
        


      <div className="md:px-0 px-16 -ml-3 sm:mr-3 mr-0">
        <div className=" rounded bg-[#26dc9e] px-2 py-2     
      ">
        <a href="https://hazecrypto.net/cakevault/" target="_blank">
          <img className="w-20 h-20 absolute -mt-9 transform md:scale-110 duration-700" src="https://hazecrypto.net/wp-content/uploads/thegem-logos/logo_726a148fa9d6f9e093eb3d9dd636513d_1x.png"/>
        <h1 bold className="font-semibold text-lg text-center pl-16 px-2 py-4 text-white
        
        ">Audited by HazeCrypto</h1>
        </a>
             </div>
      </div>
      
        </section>
  </>
)
  }
export default HeroSection
