import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Custom_Header extends React.Component {
   render() {
      return (
         <div class="subcomponent_height">
            <Navbar inverse collapseOnSelect fixedTop>
               <Navbar.Header>
                  <Navbar.Brand>
                     <a href="#brand">React-Bootstrap</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                  <Nav pullRight>
                     <NavItem eventKey={1} onClick={() => {this.props.navigation("Home")}}>
                        Home
                     </NavItem>
                     <NavItem eventKey={2} onClick={() => this.props.navigation("About")}>
                        About
                     </NavItem>
                     <NavItem eventKey={2} onClick={() => this.props.navigation("Resume")}>
                        Resume
                     </NavItem>
                     <NavItem eventKey={2} onClick={() => this.props.navigation("Interests")}>
                        Interests
                     </NavItem>
                     <NavItem eventKey={2} onClick={() => this.props.navigation("Contact")}>
                        Contact
                     </NavItem>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
          </div>
      );
   }
}
export default Custom_Header;