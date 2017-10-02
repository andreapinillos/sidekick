import React from "react";
import { Link } from "react-router-dom";
import "./People.css";

const People = props =>

<div>
    <div className="col-sm-4">
      <div className="card">
        <img src={'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=138961693' + '?size=200x200'}/>
      </div>
        <div className="card-block">
          <p>Name, Activity, and zip code here</p>
        </div>
    </div>

    <div className="col-sm-4">
      <div className="card">
        <img src={'http://vignette1.wikia.nocookie.net/epic-rap-battles-of-cartoons/images/5/5a/Patrick_star_preview_2.png' + '?size=200x200'}/>
      </div>
        <div className="card-block">
          <p>Name, Activity, and zip code here</p>
        </div>
    </div>

    <div className="col-sm-4">
      <div className="card">
        <img src={'https://vignette.wikia.nocookie.net/spongebob/images/f/f1/Squidward-Mad.gif/revision/latest?cb=20130623062624' + '?size=200x200'}/>
      </div>
        <div className="card-block">
          <p>Name, Activity, and zip code here</p>
        </div>
    </div>
</div>


export default People;
