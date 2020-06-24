import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Container
} from 'reactstrap';
import PropTypes from "prop-types"

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>


     <Navbar color="faded" light>
         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
         <Collapse isOpen={!collapsed} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink href="/components/">Components</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar>

         <Jumbotron fluid>
           <Container fluid>
             <h1 className="display-3">Fluid jumbotron</h1>
             <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
           </Container>
         </Jumbotron>

    </>
  );
}

export default Header;
