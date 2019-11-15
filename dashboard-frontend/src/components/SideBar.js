import { Nav, NavItem, NavLink, Navbar, Container } from "reactstrap";

import React, { useState } from "react";
import "../css/sideBar.css";
const SideBar = () => {
  return (
    <Container className="sideNavBar" style={{ padding: 0 }}>
      <Navbar style={{ padding: 0 }}>
        <Nav vertical style={{ width: "100%" }}>
          <NavItem>
            <NavLink href="/home" className="link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/quiz" className="link">
              Quiz
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/checkout" className="link">
              Checkout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/searchbar">Searchbar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/frontpage">Front Page</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};
export default SideBar;
