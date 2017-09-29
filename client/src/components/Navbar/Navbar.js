import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Sidekick
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
         <li
          className={window.location.pathname === "/activity" ? "active" : ""}
        >
          <Link to="/activity">Activity</Link>
        </li>
        <li
          className={window.location.pathname === "/find" ? "active" : ""}
        >
          <Link to="/find">Find</Link>
        </li>
                <li
          className={window.location.pathname === "/login" ? "active" : ""}
        >
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
