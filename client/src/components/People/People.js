import React from "react";
import { Link } from "react-router-dom";
import "./People.css";

const People = props =>

<div>
    <div className="col-sm-4">
      <div className="cardbox">
        <div className="card">
          <img className="profimg" alt={props.name} src={props.image} />
        </div>
          <div className="card-block">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Activity:</strong> {props.activity}
              </li>
              <li>
                <strong>Bio:</strong> {props.bio}
              </li>
            </ul>
          </div>
        </div>
    </div>
</div>


export default People;
