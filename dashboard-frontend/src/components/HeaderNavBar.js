import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Container
} from "reactstrap";

import React from "react";
import "../css/headerBar.css";

const HeaderNavBar = () => {
  const name = "Jiayi Zhao";
  const login = true;
  return (
    <div className="headerNavBar">
      <Navbar>
        <Nav>
          <NavItem>
            <img src="images/User_Avatar.png" height="30"></img>
          </NavItem>
          <NavItem>{name}</NavItem>
          <NavItem>
            <NavLink>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default HeaderNavBar;
