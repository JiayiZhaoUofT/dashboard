import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Container
} from "reactstrap";

import React from "react";

const HeaderNavBar = () => {
  return (
    <Navbar className="navBar">
      <NavbarBrand>
        <img src="images/logo.jpg" height="50"></img>
        Tasteguru
      </NavbarBrand>
      <Nav tabs>
        <NavItem>
          <NavLink>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default HeaderNavBar;
