import React,{useEffect} from "react";
import { Col, Row, Button } from "react-bootstrap";
import Web3 from "web3";
import {useSelector  } from "react-redux";
import "./mainInfo.css";
export default function BasicData() {
    const state = useSelector(state => state.contract)

  useEffect(() => {
    console.log(state.public.balance_,'state');

    return () => {
      
    }
  }, [state.public.balance_])

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
        <Button className="mainInfo__BNB_yield_card_button">
        Withdrawal
        </Button>
        <Button className="mainInfo__BNB_yield_card_button ml-1">
        Reinvestment
        </Button>
      </div>
    </div>
  </Col>
  )

}