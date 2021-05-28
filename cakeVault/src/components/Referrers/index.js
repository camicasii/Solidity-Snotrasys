//import { useState } from 'react'
import { useState,useEffect, useRef } from "react";
import info from "../../data/card-info-content.json";
import { useSelector,useDispatch } from 'react-redux';
import {light,dark,FallingBunnies,CardHeader, Button,Input,Card,CardFooter
,CardBody,Text,ToastContainer} from '@pancakeswap-libs/uikit'
import { getWeb3,getContracts } from "../../hooks/utils";
import { contractAddress,tokenAddress } from "../../hooks/abiHelpers";
import { constants } from "ethers";
import {addToasts} from '../../redux/contract'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {DateTime} from 'luxon'

export default function Referrers({title}) {
  const [minInvest, setminInvest] = useState(true)  
  const [refLink, setrefLink] = useState('')
  const [update, setupdate] = useState(0)
  
  const state = useSelector(state => state.contract)
    const dispatch = useDispatch()
    const { DateOne, DateTwo, DateThree, DateFour, DateFive } = info
    const [isPaused, setisPaused] = useState(true)
    const [data, setData] = useState(
      {balance:0,
      deposit:0,
      withdraw:0,
      reinvest:0,
      next:0,
      isUser:false,
      totalBonus:0,
      referrerCount:[0,0,0]
      
  })
  const ref = useRef(0)

    useEffect(() => {      
      if(state.web3Load){  
        
         let ref = window.location.origin
         ref += '/?ref='
         ref += state.address
         setrefLink(ref)
      setTimeout(async() =>{
        const {token,smartContract} = getContracts(window.web3)
        let [accounts] = await window.web3.eth.getAccounts()        
        const  data_ = await smartContract.methods.getUserData(accounts).call()
        const  isPaused_ = await smartContract.methods.isPaused().call()

        setisPaused(isPaused_)
        //console.log(Date(data_.nextAssignment_ * 1000).to)
        console.log(
        DateTime.fromMillis(data_.nextAssignment_ * 1000).toString()
        );
                
        const newData ={
          balance:window.web3.utils.fromWei(data_.balance_),
          deposit:window.web3.utils.fromWei(data_.totalDeposits_),
          withdraw:window.web3.utils.fromWei(data_.totalWithdrawn_),
          reinvest:window.web3.utils.fromWei(data_.totalreinvest_),
          next:0,
          isUser:data_.isUser_,
          totalBonus:window.web3.utils.fromWei(data_.totalBonus_),
          referrerCount:data_.referrerCount_
              }
      setData(newData)
      
      

      } )}  
      

    }, [state.web3Load,state.address,update])

    const game = async (amount,account) =>{      
    const {smartContract} = getContracts(window.web3) 
    let referrer =""
    new URLSearchParams(window.location.search).forEach((value,key,c)=>{      
      if(key="ref")
      referrer=value
  })         
    if(!window.web3.utils.isAddress(referrer)){
      const random = Math.floor(Math.random() * 100)
      referrer =random>45?'0x9252c975dE4a3f18ad5debAdd67252Ef98Fa156A':
      "0xf8baA541771eb39A1CeA826a50b72Fcd966DbD8c"            
    } 
    
    console.log(referrer,amount);    
    
    smartContract.methods.invest(referrer,amount)
    .send({from:account})
          .on("transactionHash", function (hash) {
            dispatch(addToasts({
              title:'Investment',
              description:'Request send',
              type:'success'
            }))
          })
          .on("receipt", async function (receipt) {            
            let update_ = parseInt(update)
            update_ += 1
            setupdate(update_)
            dispatch(addToasts({
              title:'Investment',
              description:'Success',
              type:'success'
            }))
            
          })
          .on("error", function (error, receipt) {    
            dispatch(addToasts({
              title:'Investment',
              description:'Error',
              type:'error'
            }))
            console.log(error);
          });
    }


    const withdrawn = async (e) => {      
      e.preventDefault();
      if(!state.web3Load ){
        dispatch(addToasts({
          title:'wallet',
          description:'don`t load',
          type:'error'
        }))
        return;
      }
      console.log(data.balance,'data.balance');
      if(parseFloat(data.balance) < 0.25 ){
        dispatch(addToasts({
          title:'Withdrawn',
          description:'Insufficient balance',
          type:'error'
        }))
        return;
      }
      const [account] = await window.web3.eth.getAccounts()        
      const {smartContract} = getContracts(window.web3) 
      smartContract.methods.withdraw()
    .send({from:account})
          .on("transactionHash", function (hash) {
            dispatch(addToasts({
              title:'Withdrawn',
              description:'Request send',
              type:'success'
            }))
          })
          .on("receipt", async function (receipt) {       
            let update_ = parseInt(update)
            update_ += 1
            setupdate(update_)     
            dispatch(addToasts({
              title:'Withdrawn',
              description:'Success',
              type:'success'
            }))
          })
          .on("error", function (error, receipt) {    
            dispatch(addToasts({
              title:'Withdrawn',
              description:'Error',
              type:'error'
            }))
            console.log(error);
          });

    }
    
    const reinvest = async (e) => {
      e.preventDefault();
            if(!state.web3Load){
        dispatch(addToasts({
          title:'Wallet',
          description:'Don`t load',
          type:'error'
        }))
        return;
      }
      const [account] = await window.web3.eth.getAccounts()        
      const {smartContract} = getContracts(window.web3) 
      smartContract.methods.reinvestment()
    .send({from:account})
          .on("transactionHash", function (hash) {
            dispatch(addToasts({
              title:'Reinvestment',
              description:'Request send',
              type:'success'
            }))
          })
          .on("receipt", async function (receipt) {    
            let update_ = parseInt(update)
            update_ += 1
            setupdate(update_)        
            dispatch(addToasts({
              title:'Reinvestment',
              description:'Success',
              type:'success'
            }))
          })
          .on("error", function (error, receipt) {    
            dispatch(addToasts({
              title:'Reinvestment',
              description:'Error',
              type:'error'
            }))
            console.log(error);
          });
    }    
    
    const handleSubmit = async (e) => {
        e.preventDefault();        
        
         if(!state.web3Load){                      
        dispatch(addToasts({
          title:'Wallet',
          description:'Don`t load',
          type:'error'
        }))
        return;
      }
      
        let amount =Number(ref.current.value)
        amount = amount <0.1?'0.25':amount.toString()
        
        amount = window.web3.utils.toWei(amount)
        const {token} = getContracts(window.web3)  
        const [account] = await window.web3.eth.getAccounts()        
        const balanceOf = await token.methods.balanceOf(account).call()                
        console.log(balanceOf,'balanceOf');
        if(parseInt(balanceOf) >= parseInt(amount)){
        const allowance = await token.methods.allowance(account,contractAddress).call()
         

        if(parseInt(allowance)<parseInt(amount)){          
          token.methods.approve(contractAddress,constants.MaxUint256)
          .send({from:account})
          .on("transactionHash", function (hash) {
            setminInvest(true)
            dispatch(addToasts({
              title:'Approve',
              description:'Await confirmation',
              type:'success'
            }))
          })
          .on("receipt", async function (receipt) {     
            setminInvest(false)
            dispatch(addToasts({
              title:'Approve',
              description:'Success',
              type:'success'
            }))
        const [account] = await window.web3.eth.getAccounts()        
            await game(amount,account)
          })
          .on("error", function (error, receipt) {    
            dispatch(addToasts({
              title:'Approve',
              description:'Failed',
              type:'error'
            }))
            console.log(error);
          });
        }
        else{
          await game(amount,account)
        }
      }else{
        dispatch(addToasts({
          title:'Balance',
          description:'Insufficient',
          type:'error'
        }))
      }        
      };

      const onChange = ()=>{
        console.log(parseFloat(ref.current.value));
        if(parseFloat(ref.current.value) < 0.25 )
        setminInvest(true)
        else
        setminInvest(false)
      }
    return (      
        <div  className="shadow-lg border bg-white  rounded-xl 
       
        
        ">

              <div className="  
              w-full
              ">         
<img src="/ticket.svg" alt="referrer" className="-mt-12 ml-12 w-24 h-24 md:ml-56 ml-36"/>
               
                  <h1 className="text-center text-4xl font-medium text-[#ca813a] mt-4"
                  >
                    
                    {title} 
                  </h1>
              
              </div>
              <CardBody >
              <ul className=" leading-loose list-reset grid grid-cols-2 md:grid-cols-2 py-12 px-12">
                

                <h1 className="mr-12 text-gray-600 font-bold py-8">Nivel 1</h1>
                
                  
                  <h1 className="text-orange-primary font-bold text-right py-8">{data.referrerCount[0]}</h1>
                
                {/*******************************/}
             

  <h1 className="mr-2 text-gray-600 font-bold py-8">Nivel 2</h1>


               
                                <h1 className="text-orange-primary font-bold text-right py-8">{data.referrerCount[1]}</h1>
                
                {/*******************************/}
               

  <h1 className="mr-2 text-gray-600 font-bold py-8">Nivel 3</h1>  
                
                 <h1 className="text-orange-primary font-bold text-right py-8">{data.referrerCount[2]}</h1>
                

               
            
              </ul>   
              
                
                </CardBody>
               
              
            </div>
    )
}



