import React,{useEffect} from "react";
import { Col, Row, Button } from "react-bootstrap";
import Web3 from "web3";
import {useSelector,useDispatch  } from "react-redux";
import "./mainInfo.css";
import Toast from "../../../hooks/toast";
import {getContracts} from "../../../hooks/utils";
import {getPublicDataAsync,getUserDataAsync} from "../../../redux/contract";
export default function BasicData() {
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
      <div className="mainInfo__BNB_yield_heading">
        Total Stake BNB
      </div>
      <div className="mainInfo__BNB_yield_Value">{Web3.utils.fromWei(  state.public.balance_)}</div>
      <div className="mainInfo__BNB_yield_heading mainInfo__BNB_yield_second_heading">
        Available BNB for withdrawal
      </div>
      <div className="mainInfo__BNB_yield_Value">{Web3.utils.fromWei(state.user.balance_)}</div>
      <div className="mainInfo__BNB_yield_card_button_parent">
        <Button className="mainInfo__BNB_yield_card_button"
        onClick={Withdrawal}
        disabled={state.isPaused}
        >
        Withdrawal
        </Button>
        <Button className="mainInfo__BNB_yield_card_button ml-1"
        disabled={state.isPaused}
        onClick={Reinvestment}
        >
        Reinvestment
        </Button>
      </div>
    </div>
  </Col>
  )

}