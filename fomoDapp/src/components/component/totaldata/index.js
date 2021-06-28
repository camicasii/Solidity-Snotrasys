import React,{useEffect} from "react";
import { Col} from "react-bootstrap";
import Web3 from "web3";
import {useSelector,useDispatch  } from "react-redux";
import "./mainInfo.css";
import Toast from "../../../hooks/toast";
import {getContracts} from "../../../hooks/utils";
import {getPublicDataAsync,getUserDataAsync} from "../../../redux/contract";
export default function TotalData() {
    const state = useSelector(state => state.contract)
    const dispatch = useDispatch()

  
const Withdrawal =async ()=>{      
    let accounts = await window.web3.eth.getAccounts();        
    const instance = getContracts()        
    instance.methods.withdraw().send({from:accounts[0] })
      .on("transactionHash", function (hash) {
        Toast.fire({
          icon: "success",
          title: "Request send",
        })
      })
      .on("receipt", async function (receipt) {            
      dispatch(getPublicDataAsync())    
      dispatch(getUserDataAsync())
        Toast.fire({
          icon: "success",
          title: "Withdrawal success",
        })
      })
      .on("error", function (error, receipt) {    
        Toast.fire({
          description:'Error',
          type:'error'
        })    
  })  
}
const Reinvestment =async ()=>{      
  let accounts = await window.web3.eth.getAccounts();        
  const instance = getContracts()      
  instance.methods.reinvestment().send({from:accounts[0] })
    .on("transactionHash", function (hash) {
      Toast.fire({
        icon: "success",
        title: "Request send",
      })
    })
    .on("receipt", async function (receipt) {            
    dispatch(getPublicDataAsync())    
    dispatch(getUserDataAsync())
      Toast.fire({
        icon: "success",
        title: "Reinvestment success",
      })
    })
    .on("error", function (error, receipt) {    
      Toast.fire({
        description:'Error',
        type:'error'
      })    
})  
}



  return(
    <>
    <Col
    style={{ paddingLeft: "0px" }}
    xl={4}
    lg={4}
    md={4}
    sm={12}
    xs={12}
    className="d-flex align-items-stretch PL0"
  >

    <div className="mainInfo__BNB_yield_card">
      <div className="mainInfo__BNB_yield_heading_total">
        Total BNB Staked
      </div>
      <div className="mainInfo__BNB_yield_total_Value">
        {parseFloat(Web3.utils.fromWei( state.public.totalInvested_)).toFixed(4)}
        </div>
      <div className="mainInfo__BNB_yield_heading_total mainInfo__BNB_yield_second_heading">
        Total Contract Balance
      </div>
      <div className="mainInfo__BNB_yield_total_Value">
        {parseFloat(Web3.utils.fromWei( state.public.balance_)).toFixed(4)}</div> 
    </div>

  </Col>

      </>
  )

}
