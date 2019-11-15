import React, { Component } from "react";

import HeaderNavBar from "./components/HeaderNavBar";
import "./App.css";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavBar></HeaderNavBar>
        <Home></Home>
      </div>
    );
  }
}

export default App;
