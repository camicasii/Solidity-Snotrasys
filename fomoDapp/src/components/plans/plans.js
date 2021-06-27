import React,{useEffect,useState} from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import {useSelector,useDispatch  } from "react-redux";
import { getWeb3,getContracts } from "../../hooks/utils";
import CardPlan from "./CardPlan";
import CardLocked from "./CardLocked";
import "./plans.css";


const plansInit = [
  {locked: false,
  percent: "80",
  returnPercent: "1120",
  time: "14"
},
{locked: false,
  percent: "68",
  returnPercent: "1365",
  time: "21"
},
{locked: false,
  percent: "50",
  returnPercent: "1400",
  time: "28"
},
{locked: true,
  percent: "384",
  returnPercent: "1937",
  time: "14"
},
{locked: true,
  percent: "550",
  returnPercent: "2752",
  time: "21"
},
{locked: true,
  percent: "584",
  returnPercent: "2920",
  time: "28"
},

]

export default function Plans() {
  const [plans, setPlans] = useState(plansInit)
  const [showCard, setShowCard] = useState(undefined)
  const state = useSelector(state => state.contract)
const planHandler  = (plans_)=>{
  return Promise.all(plans_.map((plan,i)=>{    
    return  !plan.locked? <CardPlan type={i+1} key={i} percent={plan.percent} time={plan.time} 
    returnPercent={plan.returnPercent}/>:
    <CardLocked type={i+1} key={i} percent={plan.percent} time={plan.time} 
    returnPercent={plan.returnPercent}/>
  }))
}
useEffect(() => {
  const time = setTimeout(async () => {
    const getPlans = await planHandler(plans)
    setShowCard(getPlans)    
  });
  return () => {
  clearTimeout(time)
  }
}, [])
 
  
useEffect(() => {   
  let time
   if(state.load){
    time = setTimeout(async () => {
    const con = getContracts(window.web3)    
    const getPlans =await con.methods.getPlans().call()

    console.log(getPlans,'getPlans');
    const getPlans_ = await planHandler(getPlans)
    setShowCard(getPlans_)    
    })
  }
   return () => {
      clearTimeout(time)
    }
  }, [state.load])


  return (
    <div className="plans_parent">
      <div className="plans_heading">Plans</div>
      <Row className="mt-5">
      {
        !!showCard?
        showCard.map(card=>card)        
        :null
      } 
      </Row>
    </div>
  );
}
