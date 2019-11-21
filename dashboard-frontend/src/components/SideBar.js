import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand
} from "reactstrap";

import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import "../css/sideBar.css";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  let tag = useSelector(state => state.type);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    console.log("sidebar", tag);
    return console.log("bye bye");
  });
  useEffect(() => {
    console.log("sidebar", tag);
  }, [tag]);

  return (
    <div className="sideNavBar">
      <NavbarBrand>
        <img src="images/favicon.png" height="40"></img>
        TasteGURU
      </NavbarBrand>
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar>
          <Nav vertical navbar>
            <NavItem active={tag === "home" ? true : false}>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem active={tag === "quiz" ? true : false}>
              <NavLink href="/quiz">Quiz</NavLink>
            </NavItem>
            <NavItem active={tag === "checkout" ? true : false}>
              <NavLink href="/checkout">Checkout</NavLink>
            </NavItem>
            <NavItem active={tag === "searchbar" ? true : false}>
              <NavLink href="/searchbar">Search Bar</NavLink>
            </NavItem>
            <NavItem active={tag === "frontpage" ? true : false}>
              <NavLink href="/frontpage">Front Page</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default SideBar;
