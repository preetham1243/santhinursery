import React from 'react'
import  'bootstrap/dist/css/bootstrap.css';
import {Grid, rgbToHex} from '@material-ui/core';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PhotoSharpIcon from '@material-ui/icons/PhotoSharp';
import LocalFloristSharpIcon from '@material-ui/icons/LocalFloristSharp';
import { Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import "./Footer.css"
import {Nav} from 'react-bootstrap';
import Logo from "./Logo.jpeg";
import Googlemap from "./Googlemap.jpeg"
function Footer() {

const Googlemapp = () => {
    
    window.open("https://www.google.com/maps/place/16%C2%B052'54.8%22N+81%C2%B050'11.2%22E/@16.8819,81.8342447,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d16.8819!4d81.8364334?hl=en");

}



    return (
        <div className="container-fluid content">
            <div className="content2">
                

                <Grid className="hi container" style={{color:'white'}}>
                <div className="row">
                    <div className="col" style={{paddingBottom:5}}>
                        <a href="/Home">
                        <img src={Logo} alt="Logo" width={120} height={150}/>
                   </a>
                   </div>
                   <div className="col" style={{paddingBottom:5}}>
                        
                        <img onClick={Googlemapp} src={Googlemap} alt="Google Map" width={160} height={120} />
                   
                    </div>
                </div>
                    <div className="row" style={{paddingTop:10}}>
                        <div className="col">
                <Grid item  xs={3} lg={3}>
                    
                   <ul className="list-unstyled">
                       <li style={{}}>
                           <a href="/Home"><HomeSharpIcon /> Home</a>
                       </li>
                       <li style={{}}>
                           <a href="/Gallery"><LocalFloristSharpIcon></LocalFloristSharpIcon> Proucts</a>
                        </li>
                        <li style={{}}>
                           <a href="/Contact"><AccountBoxSharpIcon></AccountBoxSharpIcon> Contact</a>
                        </li>
                        
                   </ul>
                   
                </Grid>
                </div>
                <div className="col">
                <Grid item  xs={3} lg={3}>
                   <ul className="list-unstyled">
                       
                       <li style={{}}>
                           <a href="https://www.google.com/maps/place/16%C2%B052'54.8%22N+81%C2%B050'11.2%22E/@16.8819,81.8342447,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d16.8819!4d81.8364334?hl=en"><LocationOnSharpIcon /> Location</a>
                       </li>
                       
                       <li style={{}}>
                           <a href="/Gallery"><PhotoSharpIcon></PhotoSharpIcon> Gallery</a>
                        </li>
                        <li style={{}}>
                           <a href="/Gallery"><InfoIcon></InfoIcon>  AboutUs</a>
                        </li>
                        
                   </ul>
                </Grid>
                </div>
                <div className="col">
                <Grid item  xs={12} lg={9}>
                   <div className="list-unstyled">
                      
                       <p>
                           
                       Prop: Janga Subrahmanyam
                       <br />
                       Kadiyapulanka,
                       <br />
                       NH-5  Road,
                       <br />
                       Kadiyam Mandal,
                       <br />
                       A.P-533126,India.
                       <br />
                        </p>
                        
                   </div>
                </Grid>
                </div>
                <Nav className="justify-content-center ">
                <div className="hello ">
                       
                          
                       <span>
                           <a href="mailto:Santhinursery@gmail.com"><EmailIcon style={{height:70,width:50}} /></a>
                        </span>
                        </div>
                        </Nav>
                <hr  style={{paddingTop:3}} />
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>&copy; Copyright {new Date().getFullYear()} Shanti Nursery,Kadiampulanka</p>
                    </div>
               </div>
               
                </Grid>
                
                
        </div>
        </div>
    )
}

export default Footer
