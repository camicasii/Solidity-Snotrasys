import React, { useState,useEffect } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import {useSelector,useDispatch  } from "react-redux";
import Toast from "../../../hooks/toast";
import {getContracts} from "../../../hooks/utils";
import {getPublicDataAsync,getUserDataAsync} from "../../../redux/contract";

export default function PlanSelect() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.contract)
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("0");  
  const [force, setforce] = useState(true)
  
  const [plans, setplans] = useState([]);
  const [planShow, setPlanShow] = useState(null);
  
  const forceHandler = async()=>{
    let accounts = await window.web3.eth.getAccounts();        
    const instance = getContracts()        
    instance.methods.forceWithdraw(selectedPlan).send({from:accounts[0] })
      .on("transactionHash", function (hash) {
        Toast.fire({
          icon: "success",
          title: "Request send",
        })
      })
      .on("receipt", async function (receipt) {            
      dispatch(getPublicDataAsync())    
      dispatch(getUserDataAsync())
      setforce(!force)  
      Toast.fire({
          icon: "success",
          title: "forceWithdraw success",
        })
      })
      .on("error", function (error, receipt) {    
        Toast.fire({
          description:'Error',
          type:'error'
        })    
  })  
  }

  const planHandler =(plan_)=>{
    const planShow_ = plan_.map(item=>{
      return (<div
      key={item}
        className="plansCutomDropdownItem"
        onClick={() => {
          console.log();
          setSelectedPlan(item);
          setShowDropdown(false);          
        }}
      >
        Plan {item}
      </div>)

    })
    setPlanShow(planShow_)
  }
  
useEffect(() => {
  planHandler(plans)
  
  return () => {
  
  }
}, [plans])

  useEffect(() => {
    if(state.load){
      setTimeout(async() => {
        const instance =  getContracts()
        let accounts = await window.web3.eth.getAccounts(); 
        const getPlansToForce = await instance.methods.getPlansToForce(accounts[0]).call()        
        setplans(getPlansToForce)      
      }, );
    }
    return () => {
    
    }
  }, [state.load,force])
    
    return (
        <Col
        style={{ paddingLeft: "0px" }}
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        className="d-flex align-items-stretch w-100"
      >
        {parseInt(state.user.totalDeposits_) > 0?
        <div className="secondColStyle w-100">
          <div className="secondColMainHeadingReinvestment mt-4">
            Force withdraw
          </div>
          <div className="secondHeadingReinvestment">
            Locked BNB 
          </div>
          <div
            className="plansCustomDropdown z5"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <div>Plan {selectedPlan} </div>
            <div style={{ transform: "rotateZ(270deg)" }}>
              {"<"}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {showDropdown ? (
              <div className="plansCustomDropdownItemsParent">
                {planShow?planShow.map(item=>item):null
                }
                
              </div>
            ) : null}
          </div>

          {plans?<div className="mt-3 mb-5">
            <Button className="reinvestButton"
            onClick={forceHandler}
            > Force withdraw            
            </Button>
          </div>:null
}
        </div>:null}
      </Col>
        
        )

}