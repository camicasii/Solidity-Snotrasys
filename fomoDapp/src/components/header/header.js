import React from "react";
import { Button, Image, Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";
export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="mainHeader"
        variant="dark"
      >
        <Navbar.Brand>
          {" "}
          <div className="mainHeaderParent customContainer">
            <Image src="./images/logo.png" className="logo" />
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <a
              href={process.env.REACT_APP_CONTRACT_URL}
              className=""
              target="_blank"
            >
              <Nav.Link>
                <Button className="connectWalletButton  ml-auto  text-uppercase">
                  <Image
                    src="./images/connectWallet.png"
                    style={{
                      height: "18px",
                      width: "18px",
                      marginRight: "10px",
                    }}
                  />
                  Bscscan
                </Button>
              </Nav.Link>
            </a>
            <a href={process.env.REACT_APP_TELEGRAM} target="_blank">
              <Nav.Link>
                <Button className="header_telegram_button">
                  <div>
                    <i class="fab fa-telegram-plane"></i>
                    &nbsp;&nbsp;
                  </div>
                  <div>Telegram &nbsp;</div>
                </Button>
              </Nav.Link>
            </a>
            <a href={process.env.REACT_APP_WHITEPAPER} target="_blank">
              <Nav.Link>
                <Button className="headwr_support_button">
                  <i class="fas fa-headset"></i>
                  &nbsp;&nbsp;About&nbsp;
                </Button>
              </Nav.Link>
            </a>

            <a href={process.env.REACT_APP_TELEGRAM_ES} target="_blank">
              <Nav.Link>
                <Button className="header_telegrames_button">
                  <div>
                    <i class="fab fa-telegram-plane"></i>
                    &nbsp;&nbsp;
                  </div>
                  <div>Telegram &nbsp; ES</div>
                </Button>
              </Nav.Link>
            </a>
            <div className="header_buttons_parent ml-auto"></div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
