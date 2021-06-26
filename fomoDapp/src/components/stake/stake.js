import React, { useState } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import BasicData from "../component/basicData/index";
import UserData from "../component/UserDAta/UserData";
import Plans from "../component/plans/PlanSelect";

export default function Stack() {  

  return (
    <div>      
      <div className="mt-4 mb-4">
        <div className="mainDiscription">
        1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily
        </div>
        <div className="mainDiscription">
        2. Minimum deposit amount is 0.05 BNB and you can have multiple deposits {" "}
        </div>
        <div className="mainDiscription">
        3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Locked BNB Plan
        </div>
      </div>
      <Row className=" ml-0 mr-0 " style={{ marginTop: "20px" }}>
        <UserData />
      <BasicData />
       <Plans />
      </Row>      

    
    </div>
  );
}
