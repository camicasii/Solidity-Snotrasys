import React, { useState } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
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
        <Col
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
        </Col>

        <Col
          style={{ paddingLeft: "0px" }}
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="d-flex align-items-stretch w-100"
        >
          <div className="firstColStyle ">
            <div className="firstColHeading1 mt-4">
              Total Stake BNB
            </div>
            <div className="firstColValue1 mt-3">...</div>
            <div className="firstColHeading2 mt-4">
              Available BNB for withdrawal
            </div>
            <div className="firstColValue2 mt-3 mb-3">...</div>
            <Button className="firstColButton mt-5 mb-5">
              Withdraw BNB
            </Button>
          </div>
        </Col>

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
