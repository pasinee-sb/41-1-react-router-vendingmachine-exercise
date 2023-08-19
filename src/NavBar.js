import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/oreo">Oreo</NavLink>
      <NavLink to="/twix">Twix</NavLink>
      <NavLink to="/lays">Lays</NavLink>
    </nav>
  );
}

export default NavBar;
