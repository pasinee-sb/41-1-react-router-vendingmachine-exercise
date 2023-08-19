import React from "react";
import Twix from "./Twix";
import Oreo from "./Oreo";
import Lays from "./Lays";
import NavBar from "./NavBar";
import Home from "./Home";
import "./VendingMachine.css";

import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

const VendingMachine = () => {
  return (
    <BrowserRouter>
      <div className="vending-machine-container">
        <NavBar />
        <div className="content-container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/oreo">
            <Oreo />
          </Route>
          <Route exact path="/twix">
            <Twix />
          </Route>
          <Route exact path="/lays">
            <Lays />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default VendingMachine;
