import React, { useState } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import BasicData from "../component/basicData/index";
import UserData from "../component/UserDAta/UserData";
export default function Stack() {
  const [referralLink, setReferralLink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Plan 1");
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
  return (
    <div>
      <div className="mt-4 mb-4">
        <div className="mainDiscription">
          1. Important: Plans return are float and daily profit for a
          new deposit will increase by 0.3% daily
        </div>
        <div className="mainDiscription">
          2. Minimum deposit amount is 0.05 BNB and you can have
          multiple deposits{" "}
        </div>
        <div className="mainDiscription">
          3. Earnings every moment, withdraw instantly any time (if
          you did not use capitalization of interest in Locked BNB
          Plan
        </div>
      </div>
      <Row className=" ml-0 mr-0 " style={{ marginTop: "20px" }}>
        <UserData />
      <BasicData />
        <Col
          style={{ paddingLeft: "0px" }}
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          className="d-flex align-items-stretch w-100"
        >
          <div className="secondColStyle w-100">
            <div className="secondColMainHeadingReinvestment mt-4">
              Available For Reinvestment
            </div>
            <div className="secondHeadingReinvestment">
              Locked BNB TOKEN
            </div>
            <div
              className="plansCustomDropdown"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <div>{selectedPlan} </div>
              <div style={{ transform: "rotateZ(270deg)" }}>
                {"<"}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              {showDropdown ? (
                <div className="plansCustomDropdownItemsParent">
                  <div
                    className="plansCutomDropdownItem"
                    onClick={() => {
                      setSelectedPlan("Plan 1");
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    Plan 1
                  </div>
                  <div
                    className="plansCutomDropdownItem"
                    onClick={() => {
                      setSelectedPlan("Plan 2");
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    Plan 2
                  </div>
                  <div
                    className="plansCutomDropdownItem"
                    onClick={() => {
                      setSelectedPlan("Plan 3");
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    Plan 3
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-3 mb-5">
              <Button className="reinvestButton">
                Reinvest My Locked BNB TOKEN
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <div className="stakeMainHeading mt-4">Your Stake</div>

      <div className="stakeImages mt-4">
        <Row className="showOnLargeStake">
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "20px",
              }}
              className=" Image1 ml-3"
              src="./Images/binance (1).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image2 ml-3"
              src="./Images/binance (4).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "20px",
              }}
              className=" Image3 ml-3"
              src="./Images/binance (2).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image4 ml-3"
              src="./Images/binance (5).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "80%",
                height: "25px",
              }}
              className=" Image5 ml-3"
              src="./Images/binance (6).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "65%",
                height: "30px",
              }}
              className=" Image6"
              src="./Images/binance (3).png"
            />
          </Col>
        </Row>

        <Row className="showOnSmallStake">
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image1 ml-3"
              src="./Images/binance (1).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image2 ml-3"
              src="./Images/binance (4).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image3 ml-3"
              src="./Images/binance (2).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image4 ml-3"
              src="./Images/binance (5).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image5 ml-3"
              src="./Images/binance (6).png"
            />
          </Col>
          <Col xs={6} sm={6} md={2} lg={2}>
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "30px",
              }}
              className=" Image6"
              src="./Images/binance (3).png"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
