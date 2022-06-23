import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={({ isActive }) => classes.active} to="/calc">
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => classes.active} to="/conv">
              Convertion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
