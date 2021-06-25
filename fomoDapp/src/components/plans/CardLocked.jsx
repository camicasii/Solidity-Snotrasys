import React from 'react'
import { Col, Row, Button, Image } from "react-bootstrap";
import "./plans.css";

export default function CardLocked({type,percent,time,returnPercent,locked}) {
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

          <div className="planInfo d-none">
            In 10 days you will get 0 BNB
          </div>
          <div>
            <div className="d-flex plans_cards_locked_input_parent">
              <input
                type="text"
                placeholder="Enter Amount"
                className="plans_cards_input"
              />
              <div className="plans_cards_input_img_parent">
                <img src="./images/input.png" alt="" />
              </div>
            </div>
          </div>
          <div className="plans_cards_stakeBNB_button_parent">
            <Button className="plans_cards_locked_stakeBNB_button">
              Stake BNB
            </Button>
          </div>
        </div>
      </Col>
    )
}
