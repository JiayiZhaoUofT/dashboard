import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Quiz from "./pages/Quiz";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import HeaderNavBar from "./components/HeaderNavBar";
import SideBar from "./components/SideBar";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <HeaderNavBar></HeaderNavBar>
      <div className="mainContentWrapper">
        <div className="sideBar" style={{ flex: 1 }}>
          <SideBar></SideBar>
        </div>
        <div className="mainContent">
          <Route path="/home" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/frontpage" component={FrontPage} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
