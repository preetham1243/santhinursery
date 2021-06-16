import React from 'react'
import { NavLink } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Modal,NavbarBrand} from 'react-bootstrap';
import Home from "./About";
import About from "./Home";
import Contact from "./Contact";
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import './Headnavbar.css';
import Logo from "./Logo.jpeg"
function Headnavbar() {
    return (
        <><Navbar expand="md" className="navbar">
          
        <Navbar.Brand href="/home">
        <img src={Logo} height="50" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="baisc-navbar-nav" style={{color:"brown",backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="/home" style={{color:'white'}}><h4>Home</h4></Nav.Link>
            <Nav.Link href="/About" style={{color:'white'}}><h4>About</h4></Nav.Link>
            <Nav.Link href="/Gallery" style={{color:'white'}}><h4>Gallery</h4></Nav.Link>
            <Nav.Link href="/Contact" style={{color:'white'}}><h4>Contact</h4></Nav.Link>
          </Nav>
          
          <Nav className="justify-content-end " style={{ width: "100%" }}>
          
         <a data-toggle="Modal" data-target="#loginmodal" href="tel:7995418151">
         <Button style={{color:"white" , backgroundColor:'green'}} ><CallRoundedIcon /> { } Call</Button>
         </a>
        
        </Nav>
        
        </Navbar.Collapse>
        
      </Navbar>



      
      <div>
         
      </div>







        </>
    );
}

export default Headnavbar
