import React, {Component} from "react";
import { navLinks } from "../data/navLinks";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class MyNav extends Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {navLinks.map((link)=>{
                  return(
                 <Nav.Link href={link.href}>{link.title}</Nav.Link>
                
                  )
                })}
                
              </Nav>
            </Container>
          </Navbar>
        
    
        )
    }
   
}
 
export default MyNav;