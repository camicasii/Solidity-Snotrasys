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
    <section className="grid grid-cols-1 md:grid-cols-3 py-12 gap-6 ">
      <Card className="ml-4  px-3 py-2 rounded lg:flex items-center justify-start">
        <Text color="primary" >Total Cake stake:</Text>
         <Text bold className='px-3'>{balance}</Text></Card>
      <Card className=" lg:inline-flex flex-col text-2xl  px-3 py-4 rounded font-bold items-center justify-center      
      ">
        <a href={process.env.REACT_APP_CONTRACT_URL} target="_blank">
        <Text bold className="text-base text-center 
        truncate px-4
        ">{process.env.REACT_APP_CONTRACT_ADDRESS}</Text>
        </a>
             </Card>

      
      <Card className="mr-4 px-3 py-2 lg:inline-flex text-right sm:items-center justify-end">
      <Text color="primary" >Your balance Cake :</Text>
         <Text bold className='px-3'>{youCake}</Text></Card>
    </section>
  </>
)
  }
export default HeroSection
