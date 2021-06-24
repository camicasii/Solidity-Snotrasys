import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./mainInfo.css";
export default function MainInfo() {
  return (
    <div>
      <Row>
        <Col
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          className="d-flex align-items-stretch"
        >
          <div className="mainInfo__BNB_yield_card">
            <div className="mainInfo__BNB_yield_heading">
              Locked BNB - investment platform based on Binance Smart
              Chain blockchain smart-contract technology.(from 8% to
              20% daily.)
            </div>
            <div className="mainInfo__BNB_yield_points">
              <ul>
                <li>
                  <span>
                    For every 24 hours, interest rate increases by
                    0.5% with no maximum while withdraw time decreases
                    by 0.5 day, minimum day is 5 (19 days after
                    project launched) and it will stay 5.
                  </span>
                </li>

                <li>
                  <span>
                    Total income (based on your tariff plan): from 8%
                    to 20% daily + Basic interest rate (growing
                    daily).
                  </span>
                </li>

                <li>
                  <span>
                    Minimal deposit: 0.05 BNB and no maximal limit .
                  </span>
                </li>

                <li>
                  <span>
                    30% Reinvest Wallet For Sustainability. Whenever
                    user withdraw.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="d-flex align-items-stretch PL0"
        >
          <div className="mainInfo__BNB_yield_card">
            <div className="mainInfo__BNB_yield_heading">
              Total Stake BNB
            </div>
            <div className="mainInfo__BNB_yield_Value">...</div>
            <div className="mainInfo__BNB_yield_heading mainInfo__BNB_yield_second_heading">
              Available BNB for withdrawal
            </div>
            <div className="mainInfo__BNB_yield_Value">...</div>
            <div className="mainInfo__BNB_yield_card_button_parent">
              <Button className="mainInfo__BNB_yield_card_button">
                Check Audit PDF
              </Button>
              <Button className="mainInfo__BNB_yield_card_button ml-1">
                Check Audit PDF
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
