import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from './sidekick.svg';
import Social from '../social'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-fixed-top">
    <div className="container-fluid">
      
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img src={img} />
        </Link>
      </div>

      <ul className="nav navbar-nav">
        <li>
          <Social />
        </li>

      </ul>
    </div>
  </nav>;

export default Navbar;
