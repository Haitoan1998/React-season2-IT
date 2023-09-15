import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeclassName="active">
        Home
      </NavLink>

      <NavLink to="/todo">todo</NavLink>

      <NavLink to="/timer">timer</NavLink>
      <NavLink to="/Search">Search youtube</NavLink>
    </div>
  );
};
export default Nav;
