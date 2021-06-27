import React from "react";
import { Button, Image } from "react-bootstrap";
import "./header.css";
export default function Header() {
  return (
    <div className="mainHeader">
      <div className="mainHeaderParent showOnLarge customContainer">
        <div>
          <Image src="./images/logo.png" className="logo" />
        </div>       
        <a src={process.env.REACT_APP_CONTRACT_URL} className="ml-auto pl-5 mr-auto">
          
          <Button className="connectWalletButton ml-auto  text-uppercase">
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
          
        </a> 
        <div className="header_buttons_parent ml-auto">
          <a src={process.env.TELEGRAM}>
          <Button className="header_telegram_button" >
            
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp;</div>
          </Button>          
          </a>
          <a src={process.env.TELEGRAM}>
          <Button className="headwr_support_button">
            <i class="fas fa-headset"></i>
            &nbsp;&nbsp;About&nbsp;
          </Button>
          </a>
          <a src={process.env.TELEGRAM_ES}>
          <Button className="header_telegram_button custom_button">
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp; ES</div>
          </Button>     
          </a>
          
        </div>
      </div>
      <div className="mainHeaderParentSmall showOnSmall p-2">
        <div className="firstParent">
          <div>
            <div>
              <Image src="./images/logo.png" className="logo" />
            </div>
          </div>         
          
        </div>
        <div className="ml-auto">
        <a src={process.env.TELEGRAM}>
          <Button className="header_telegram_button custom_button">
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp; EN</div>
          </Button>     
          </a>
          <a src={process.env.TELEGRAM_ES}>
          <Button className="header_telegram_button custom_button">
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp; ES</div>
          </Button>     
          </a>
          <a src={process.env.TELEGRAM}>
          <Button className="headwr_support_button mt-3 custom_button">
            <i class="fas fa-headset"></i>
            &nbsp;&nbsp;About&nbsp;
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
