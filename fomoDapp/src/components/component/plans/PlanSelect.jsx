import React, { useState,useEffect } from "react";
import "./stake.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import {useSelector  } from "react-redux";
import Swal from "sweetalert2";
export default function PlanSelect() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("Plan 1");
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
        
        )

}