import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from './sidekick.svg';
import Social from '../social'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img src={img} />
        </Link>
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button id="profilelink">
                <a href="/profile">Profile</a>
              </button>
            </li>
            <li>
              <Social />
            </li>
          </ul>
      </div>
    </div>
  </nav>


export default Navbar;

