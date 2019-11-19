import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Collapse,
  NavbarToggler
} from "reactstrap";

import React, { useState, useEffect } from "react";
import "../css/sideBar.css";
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [type, setType] = useState("home");
  const toggleNavbar = () => setCollapsed(!collapsed);
  useEffect(() => {
    console.log(type);
  }, []);
  useEffect(() => {
    return console.log("bye bye");
  });
  return (
    <div className="sideNavBar">
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar>
          <Nav vertical navbar>
            <NavItem>
              <NavLink
                href="/home"
                className="link"
                active={type === "home"}
                onClick={() => setType("home")}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/quiz"
                className="link"
                active={type === "quiz"}
                onClick={() => setType("quiz")}
              >
                Quiz
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/checkout"
                className="link"
                active={type === "checkout"}
                onClick={() => setType("checkout")}
              >
                Checkout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/searchbar"
                active={type === "searchbar"}
                onClick={() => setType("searchbar")}
              >
                Search Bar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/frontpage"
                active={type === "frontpage"}
                onClick={() => setType("frontpage")}
              >
                Front Page
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default SideBar;
