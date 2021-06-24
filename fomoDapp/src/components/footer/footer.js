import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footerParent mt-5">
      <Row>
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="footerHeading">Powerd by</div>
          <div className="footerInfo">Binance Smart Chain</div>
        </Col>
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="footerHeading">Audited by HazeCrypto</div>
          <div className="footerInfo">Binance Smart Chain</div>
        </Col>
        <Col
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="footerHeading">
            All rights reserved 2021
          </div>
          <div className="footerInfo">Binance Smart Chain</div>
        </Col>
      </Row>
    </div>
  );
}
