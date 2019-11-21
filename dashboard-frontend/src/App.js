import React, { Component } from "react";
import Quiz from "./pages/Quiz";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import SearchBar from "./pages/Searchbar";

import HeaderNavBar from "./components/HeaderNavBar";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="mainPageWrapper">
        <div className="mainPageSideBar">
          <SideBar></SideBar>
        </div>
        <div className="mainContentWrapper">
          <HeaderNavBar></HeaderNavBar>
          <Router>
            <div className="mainContent">
              <Route path="/home" component={Home} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/frontpage" component={FrontPage} />
              <Route path="/searchbar" component={SearchBar} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
