import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Footer_Custom extends React.Component {
    render() {
       return (
          <div className="subcomponent_height">
             <Navbar inverse collapseOnSelect fixedBottom>
               <Navbar.Header>
                  <Navbar.Brand>
                     <a href="#brand">React-Bootstrap</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                  <Nav pullRight>
                     <NavItem eventKey={1} href="#">
                        Home
                     </NavItem>
                     <NavItem eventKey={2} href="#">
                        About
                     </NavItem>
                     <NavItem eventKey={2} href="#">
                        Resume
                     </NavItem>
                     <NavItem eventKey={2} href="#">
                        Interests
                     </NavItem>
                     <NavItem eventKey={2} href="#">
                        Contact
                     </NavItem>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
          </div>
       );
    }
 }

 export default Footer_Custom;