import React,{useEffect} from "react";
import { Col, Row, Button } from "react-bootstrap";
import {useSelector  } from "react-redux";
import BasicData from "../component/basicData/index";
import TotalData from "../component/totaldata";
import "./mainInfo.css";
export default function MainInfo() {
  const state = useSelector(state => state.contract)

  useEffect(() => {
    console.log(state.public.balance_,'state');

    return () => {
      
    }
  }, [state.public.balance_])
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
            <div className="mainInfo__BNB_yield_title">
            Fomo Stake 2 Reloaded
            </div>
            <div className="mainInfo__BNB_yield_points">
              <ul>
                <li>
                  <span>
                 - Basic Inflation Rate: for every 24 hours, interest rate increase by 0.5% with no maximum while withdraw time decreases by 0.5 day. Minimum day is 5.                  </span>
                </li>

                <li>
                  <span>
                  - Minimal Deposits 0.025 BNB, no maximal limit and you can have multiple depostis.                  </span>
                </li>

                <li>
                  <span>
                  - Dividends every moment, withdraw any time (if you use capitalization of interest you can withdraw only after end of your deposit).                  </span>
                </li>

                <li>
                  <span>
                 - Reinvest: New and improved, increase your earnings by reinvesting in flexible plans to activate compound interest (reinvestment increases with daily basic ROI).
                  </span>
                </li>

                <li>
                  <span>
                 - Terminate Stake: New and improved, investors can terminate their stakes and get 30% of their fund back while the remaining goes into the pool. (plan 1,2,3, are not allowed to terminate after withdrawing interest).                  </span>
                </li>
                
                <li>
                  <span>
                - Insurance: New and improved, this is a wallet whose purpose is to serve as a backup for the project leader allegiances, capital retribution for the community, giveaways for the community, global fund support                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <TotalData />
      </Row>
    </div>
  );
}
