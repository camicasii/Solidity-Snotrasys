import React, { useState,useEffect } from "react";
import "./stake.css";
import Web3 from "web3";
import { Row, Col} from "react-bootstrap";
import {useSelector  } from "react-redux";
import InputRef from "./InputRef";

export default function UserData() {
    const [referralLink, setReferralLink] = useState("asdfasdf");    
    const state = useSelector(state => state.contract)
    useEffect(() => {      
      let time
      if(state.load){
        console.log(state.user.balance_,'state');    
      time = setTimeout(async() => {
        let accounts = await window.web3.eth.getAccounts();        
        let ref = window.location.origin
         ref += '/?ref='
         ref += accounts[0]
         setReferralLink(ref)
          
        },);
      }
        return () => {          
          clearTimeout(time)
        }
      }, [state.load])

    
    return(         
    <Col
        style={{ paddingLeft: "0px" }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
         {parseInt(state.user.totalDeposits_) > 0?
        <div className="secondColStyle">
        <InputRef referralLink={referralLink}/>
          <Row>
            <Col xs={12} sm={12} md={7} lg={7}>
              <Row>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                  Total Deposits
                  </div>
                  <div className="valuess mt-2">
                    {Web3.utils.fromWei( state.user.totalInvested)} BNB
                    { } BNB
                    
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                   Referal Bonus
                  </div>
                  <div className="valuess mt-2">
                  {Web3.utils.fromWei( state.user.referalBonus)} BNB
                  </div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                  Referrer Count
                  </div>
                  <div className="valuess mt-2  h6 font-weight-light"                   
                  >
                    <p> level 1: {state.user.referrerCount_[0]}</p>
                    <p> level 2: {state.user.referrerCount_[1]}</p>
                    <p> level 3: {state.user.referrerCount_[2]}</p>
                    
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                    Total Reinvest
                  </div>
                  <div className="valuess mt-2">
                  {Web3.utils.fromWei( state.user.totalreinvest_)} BNB
                  </div>
                </Col>
              </Row>
              <div className="headingss mt-4">
                Total Withdrawn
              </div>
              <div className="valuess mt-2 mb-3">
              {Web3.utils.fromWei( state.user.totalWithdrawn_)} BNB
              </div>
            </Col>
            <Col
              style={{ paddingRight: "35px" }}
              xs={12}
              sm={12}
              md={5}
              lg={5}
            >
              <div className="paragraphss mt-4 mb-3">
                Earn for promotion FomoStake 2 <br /> You will
                receive: <br />
                <br /> 5% from each level 1 referral deposits 2.5%
                from each level 2 referral deposits 0.5% from each
                level 3 referral deposits Note! You need to have at
                least 1 deposit to start receive earnings
              </div>
            </Col>
          
          </Row>
        </div>
        :null} 
      </Col>
    )


}