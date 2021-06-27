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
        <div className="ml-auto pl-5 mr-auto">
          <Button className="connectWalletButton ml-auto ">
            <Image
              src="./images/connectWallet.png"
              style={{
                height: "18px",
                width: "18px",
                marginRight: "10px",
              }}
            />
            Connect Wallet
          </Button>
        </div>        
        <div className="header_buttons_parent ml-auto">
          <Button className="header_telegram_button">
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp;</div>
          </Button>
          <Button className="header_twitter_button">
            <i class="fab fa-twitter"></i>
            &nbsp;&nbsp;Twitter&nbsp;
          </Button>
          <Button className="headwr_support_button">
            <i class="fas fa-headset"></i>
            &nbsp;&nbsp;Support&nbsp;
          </Button>
        </div>
      </div>
      <div className="mainHeaderParentSmall showOnSmall p-2">
        <div className="firstParent">
          <div>
            <div>
              <Image src="./images/logo.png" className="logo" />
            </div>
          </div>
          <Button className="connectWalletButton ml-auto mt-3">
            <Image
              src="./images/connectWallet.png"
              className="smallConnectWalletButtonImage "
            />
            Connect Wallet
          </Button>
          <div className="header_one_BNB ml-auto mt-3">
            1 BNB =&nbsp;
            <span className="header_one_BNB_value"> $523.14</span>
          </div>
        </div>
        <div className="ml-auto">
          <Button className="header_telegram_button custom_button">
            <div>
              <i class="fab fa-telegram-plane"></i>
              &nbsp;&nbsp;
            </div>
            <div>Telegram &nbsp;</div>
          </Button>
          <Button className="header_twitter_button mt-3 custom_button">
            <i class="fab fa-twitter"></i>
            &nbsp;&nbsp;Twitter&nbsp;
          </Button>
          <Button className="headwr_support_button mt-3 custom_button">
            <i class="fas fa-headset"></i>
            &nbsp;&nbsp;Support&nbsp;
          </Button>
        </div>
      </div>
    </div>
  );
}
