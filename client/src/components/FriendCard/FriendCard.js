import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
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
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default FriendCard;
