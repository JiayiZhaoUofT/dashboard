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
    <Navbar color="light">
      <NavbarBrand>
        <img src="images/logo.jpg" height="40"></img>
        Tasteguru
      </NavbarBrand>
      <Nav tabs>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>My Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>others</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default HeaderNavBar;
