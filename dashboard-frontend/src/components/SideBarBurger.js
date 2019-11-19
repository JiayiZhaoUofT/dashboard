import { slide as Menu } from "react-burger-menu";
import React from "react";
import "../css/sideBar.css";
class SideBarBurger extends React.Component {
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/home">
          Home
        </a>
        <a id="about" className="menu-item" href="/frontpage">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
        <div className="always-visible">
          <p>ddd</p>
          <p>ddwewe</p>
        </div>
      </Menu>
    );
  }
}

export default SideBarBurger;
