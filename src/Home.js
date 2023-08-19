import React from "react";
import Twix from "./Twix";
import Oreo from "./Oreo";
import Lays from "./Lays";
import NavBar from "./NavBar";
import {
  BrowserRouter,
  Route,
  NavLink,
} from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <div>
      <h1>Pick me</h1>

      <img
        src="https://img.freepik.com/premium-vector/vending-machine-cartoon-snack-drinks-selling_53562-15428.jpg?w=360"
        alt="Audrey II wants to eat."
      />
    </div>
  );
}

export default Home;
