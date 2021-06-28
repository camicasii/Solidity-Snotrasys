import React, { useState } from "react";
import "./stake.css";
import {useSelector,useDispatch  } from "react-redux";
import { Row, Col, Button, Image } from "react-bootstrap";
import BasicData from "../component/basicData/index";
import UserData from "../component/UserDAta/UserData";
import Plans from "../component/plans/PlanSelect";

export default function Stack() {  
  const state = useSelector(state => state.contract)
  return (
    <div>      
      <div className="mt-4 mb-4" >
        <div className="mainDiscription">
        1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily
        </div>
        <div className="mainDiscription">
        2. Minimum deposit amount is 0.025 BNB and you can have multiple deposits 
        </div>
        <div className="mainDiscription">
        3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Locked BNB Plan
        </div>
      </div>
      {parseInt(state.user.totalDeposits_)>0?
      <Row className=" ml-0 mr-0 " style={{ marginTop: "20px" }}>
        <UserData />
      <BasicData />
       <Plans />
      </Row>
      :null
}

    
    </div>
  );
}
