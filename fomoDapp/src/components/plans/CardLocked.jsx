import React,{useRef,useState,useEffect} from 'react'
import { Col, Row, Button, Image } from "react-bootstrap";
import "./plans.css";
import {useSelector,useDispatch  } from "react-redux";
import Toast from "../../hooks/toast";
import {getContracts,refHandler} from "../../hooks/utils";
import {getPublicDataAsync,getUserDataAsync} from "../../redux/contract";

export default function CardLocked({type,percent,time,returnPercent}) {
  const state = useSelector(state => state.contract)
  const dispatch = useDispatch()
  const ref = useRef(0.025)
  const [amount, setAmount] = useState('0.025')
  const [calculate, setcalculate] = useState('0')

  useEffect(() => {

    const res = parseFloat(amount * ((parseInt(returnPercent)/10) /100) ).toFixed(3)
    setcalculate(res)
    
    return () => {
    
    }
  }, [returnPercent,amount])

  const invest = async (e)=>{
    e.preventDefault()
    if(!state.load){
      Toast.fire({
        icon: "error",
        title: "wallet is not connected",
      })
      return
    }
    const referrar = refHandler()           
    let accounts = await window.web3.eth.getAccounts();        
    const instance = getContracts()
    const sendValue = window.web3.utils.toWei(amount);
    const planType = parseInt(type) - 1;
    instance.methods.invest(referrar,planType).send({from:accounts[0]
      ,value:sendValue})
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
          title: "Investment success",
        })
      })
      .on("error", function (error, receipt) {    
        Toast.fire({
          description:'Error',
          type:'error'
        })
    
  })
}   
  
  const  onChange = ()=>{
    if(parseFloat(ref.current.value)>=0.025)
    setAmount(ref.current.value)
    else 
    setAmount('0.025')
  }
    return (
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
        <div className="plans_cards_locked">
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="./images/lock.png"
              className="plans_cards_locked_image"
            />
            <span className="plans_cards_locked_heading ">
              Locked Plan {type}
            </span>
          </div>

          <div className="d-flex justify-content-around">
            <div className="plans_cards_first_info_parent">
              <div>
                <div className="plans_cards_first_info_paragrapg">
                  Daily Profit
                </div>
                <div className="plans_cards_first_info_heading">
                ~{parseInt(returnPercent)/(5*10)}
                </div>
              </div>
              <div>
                <div className="plans_cards_first_info_paragrapg mt-4">
                  Withdraw Time
                </div>
                <div className="plans_cards_first_info_heading">
                  Any Time
                </div>
              </div>
            </div>

            <div className="plans_cards_first_info_parent ">
              <div>
                <div className="plans_cards_first_info_paragrapg">
                  Total Return
                </div>
                <div className="plans_cards_first_info_heading">
                {parseInt(returnPercent)/10} %
                </div>
              </div>
              <div>
                <div className="plans_cards_first_info_paragrapg mt-4">
                  Days
                </div>
                <div className="plans_cards_first_info_heading">
                {time}
                </div>
              </div>
            </div>
          </div>

          <div className="planInfo font-weight-bold">
          In {time} days you will get {calculate} BNB
          </div>
          <div>
            <div className="d-flex plans_cards_locked_input_parent">
              <input
                type="text"
                placeholder="Enter Amount"
                className="plans_cards_input"
                onChange={onChange}
                  ref={ref}                  
                  min={0.025}
              />
              <div className="plans_cards_input_img_parent">
                <img src="./images/input.png" alt="" />
              </div>
            </div>
          </div>
          <div className="plans_cards_stakeBNB_button_parent">
            <Button className="plans_cards_locked_stakeBNB_button"
            onClick={(e)=>invest(e)}>
              Stake BNB
            </Button>
          </div>
        </div>
      </Col>
    )
}

