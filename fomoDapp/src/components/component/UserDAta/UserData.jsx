import React, { useState,useEffect } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import {useSelector  } from "react-redux";
import Swal from "sweetalert2";
export default function UserData() {
    const [referralLink, setReferralLink] = useState("asdfasdf");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("Plan 1");
    const state = useSelector(state => state.contract)

    useEffect(() => {
        console.log(state.user.balance_,'state');
    
        return () => {
          
        }
      }, [state.user])


    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
    
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
    
        Toast.fire({
          icon: "success",
          title: "Referral Link Copied",
        });
      };
    return(<Col
        style={{ paddingLeft: "0px" }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <div className="secondColStyle">
          <div className="secondColMainHeading mt-4">
            Your Referral Link
          </div>
          <div className="secondColMainInputSet mt-2">
            <input
              type="text"
              placeholder="    ...."
              className="secondColInput"
              onChange={(e) => {
                setReferralLink(e.target.value);
              }}
            />
            <div className="secondColInputImage">
              <Image
                src="./images/copy .png"
                onClick={handleCopy}
                style={{ cursor: "pointer" }}
              />
            </div>
            <Button
              className="secondColButton "
              onClick={handleCopy}
            >
              Copy
            </Button>
          </div>

          <Row>
            <Col xs={12} sm={12} md={7} lg={7}>
              <Row>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                    Referral Boost
                  </div>
                  <div className="valuess mt-2">...</div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                    Lottery Bonus
                  </div>
                  <div className="valuess mt-2">...</div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                    Total Referral Earned
                  </div>
                  <div className="valuess mt-2">...</div>
                </Col>
                <Col sm={6} md={6} lg={6} className="p-0">
                  <div className="headingss mt-3">
                    Total Referral Withdrawn
                  </div>
                  <div className="valuess mt-2">...</div>
                </Col>
              </Row>
              <div className="headingss mt-4">
                Total Referral Withdrawn
              </div>
              <div className="valuess mt-2 mb-3">...</div>
            </Col>
            <Col
              style={{ paddingRight: "35px" }}
              xs={12}
              sm={12}
              md={5}
              lg={5}
            >
              <div className="paragraphss mt-4 mb-3">
                Earn for promotion Locked BNB <br /> You will
                receive: <br />
                <br /> 5% from each level 1 referral deposits 2.5%
                from each level 2 referral deposits 0.5% from each
                level 3 referral deposits Note! You need to have at
                least 1 deposit to start receive earnings
              </div>
            </Col>
          </Row>
        </div>
      </Col>)


}