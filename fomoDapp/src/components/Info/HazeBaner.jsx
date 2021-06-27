import React from 'react'
import { Row, Col, Button, Image } from "react-bootstrap";
import "./stake.css";

export default function HazeBaner() {
    return (
        <div>
        <Row className="showOnLargeStake">
        <Col xs={6} sm={6} md={2} lg={6}>
          <img
            style={{
              
              width: "5rem",
              height: "5rem",
            }}
            className=" Image1 ml-3"
            src="/images/hazeCripto.png"
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
            src="https://hazecrypto.net/"
          />
        </Col>        
      </Row></div>
    )
}
