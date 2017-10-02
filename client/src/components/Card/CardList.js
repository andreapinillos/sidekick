import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

// 
const CardList = props => {
  const carditems = props.video.map((sidekick) => {
    return <CardItem key={sidekick._id} card= {sidekick} />

  });

};


export default CardList;




// <div className = "row">
// </div>

// ;