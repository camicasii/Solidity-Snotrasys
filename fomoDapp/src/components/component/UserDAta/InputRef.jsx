import React from 'react'
import { Row, Col, Button, Image } from "react-bootstrap";
import Toast from "../../../hooks/toast";
import './stake.css'

export default function InputRef({referralLink}) {
    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);    
        Toast.fire({
          icon: "success",
          title: "Referral Link Copied",
        });
      };
    return (
        <div>
        <div className="secondColMainHeading mt-4">
          Your Referral Link
        </div>
        <div className="secondColMainInputSet mt-2">
          <div
            
            
            className="secondColInput text-center pt-2 px-1  text-truncate"            
          >{referralLink} </div>
          <div className="secondColInputImage">
            <Image
              src="./images/copy .png"
              onClick={handleCopy}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Button
            className="twoColButton "
            onClick={handleCopy}
          >
            Copy
          </Button>
        </div>
        </div>
    )
}
