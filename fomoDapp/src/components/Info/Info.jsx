import React,{useState} from 'react'
import { Row, Col, Button, Image,Card } from "react-bootstrap";
import "./stake.css";
export default function ControlledCarousel() {    
  
    return (
        <Row className="flex  justify-arrow ">
        <Col xs={12} sm={12} md={8} lg={5}>
        <Card   className="carouselBack mx-3">        
        <Card.Header   className="flex justify-center card_title" >
          <Card.Title style={{fontSize: '1.562em'}}>Audited by</Card.Title>
        </Card.Header>
        <Card.Body   >                      
          <Row >
              <Col  >
              <div className="flex justify-center w-100" >
              <img
            style={{              
                        }}
            className=" Image2 mr-3"
            src="/images/hazeCripto.png"
          />
          </div>
          </Col>              
              <Col xs={12} sm={12} md={5} lg={5} className="h-100 text-center">
                  <h4 >Hazecrypto</h4>
                  <a href={process.env.REACT_APP_AUDIT} target="_blank"  ><Button className='buttom_audited'>Audited</Button></a>  
              </Col>              
            <Col>

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
