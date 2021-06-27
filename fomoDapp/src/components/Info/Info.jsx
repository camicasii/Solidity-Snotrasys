import React,{useState} from 'react'
import { Row, Col, Button, Image,Card } from "react-bootstrap";
import "./stake.css";
export default function ControlledCarousel() {    
  
    return (
        <Row className="flex  justify-arrow ">
        <Col xs={12} sm={12} md={5} lg={5}>
        <Card   className="carouselBack mx-3">        
        <Card.Header   className="flex justify-center card_title" >
          <Card.Title style={{fontSize: '1.562em'}}>Audited by</Card.Title>
        </Card.Header>
        <Card.Body   >                      
          <Row >
              <Col xs={6} >
              <div className="flex justify-center w-100" >
              <img
            style={{              
              width: "10rem",
              height: "10rem",
            }}
            className=" Image1 ml-3"
            src="/images/hazeCripto.png"
          />
          </div>
          </Col>              
              <Col xs={6} className="h-100 text-center">
                  <h4 >Hazecrypto</h4>
                <a> <Button className='buttom_audited'>Audited</Button></a>  
              </Col>              
              
            </Row>          
          
        </Card.Body>
      </Card>
      </Col>
      <Col xs={12} sm={12} md={5} lg={5} className="ml-md-auto ">          
            <iframe
             className="w-100"
            width="300" height="154" src="https://w2.countingdownto.com/3676629" frameborder="0"></iframe>                
      </Col>
      </Row>
    )
}
