import React from 'react';
import {} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from 'react-bootstrap';
import "./Contact.css";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import {Container,Row,Col} from 'react-bootstrap';

function Contact() {
    
    return (
      < div className="ffdd">
      <div className="contactus container" id="grad1">
        <h2>Contact :</h2>
        <h6>
          <br />
          <br />
        Prop: 
        <br />
        <br />
        Kadiyapulanka
        <br />
        <br />
        NH-5  Road,
        <br />
        <br />
        Kadiyam Mandal,
        <br />
        <br />
        A.P-533126,India.
        <br />
        <br />
        
        </h6>
     
      
      </div>
      <Container>
      
        <Row>
          <Col>
          <Row>
            <Col>
      <a href="tel:7995418151">
        <Button style={{width:100,height:70}}>
      <CallIcon style={{width:40,height:40,paddingRight:5}}>Call</CallIcon>
      </Button>
      </a>
      </Col>
      <Col style={{paddingRight:80}}>
      <h1>9866367899,7995418151
</h1>
      </Col>
      </Row>
        </Col>
        <Col>
        <Row>
          <Col>
       < Button style={{width:100,height:70}}>
          <EmailIcon style={{width:40,height:40,paddingRight:5}}>Email</EmailIcon>
          </Button>
          </Col>
          <Col style={{paddingRight:40}}>
          <h1>Santhinursery@gmail.com</h1>
          </Col>
          </Row>
          </Col>
          </Row>
          </Container>
        
    </div>
    
    
    )
}

export default Contact
