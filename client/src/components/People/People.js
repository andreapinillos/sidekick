import React from "react";
import { Link } from "react-router-dom";
import "./People.css";


const People = props =>

<div>
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <a href={props.href}>
        <div className="cardbox dropdown">
          <div className="card">
            <img className="profimg" alt={props.name} src={props.image} />
          </div>
            <div className="card-block dropdown-content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Activity:</strong> {props.activity}
                </li>
                <li>
                  <strong>About:</strong> {props.bio}
                </li>
              </ul>
            </div>
          </div>
      </a>
    </div>
</div>


export default People;
