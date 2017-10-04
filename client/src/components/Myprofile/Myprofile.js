import React from "react";
import Col from "../Col";
import "./Myprofile.css";



const Myprofile = props =>

<div className="container">
<div className="myprofilecontainer">
<h1 id="changeinfo">Update your Information</h1>
  
<div className="row">
  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png">
        <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
    </a>
  </div>
  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="well">
        Name: {props.name}
      </div>
      <div className="well">
        Activity: {props.activity}
      </div>
      <div className="well">
        Zipcode: {props.zipcode}
      </div>
  </div>  
</div>

  <form className="myprofile" style={{ marginTop: 30}}>
    <div className="row">
      <div className="col-md-4">
          <div className="form-group biogroup">
              <label for="bio" style={{fontFamily:'Roboto'}}>Bio</label>
                <textarea 
                className="bio form-control" 
                rows="5"
                value={props.bio}
                onChange={props.handleInputChange}
                name="bio"
                type="text"
                placeholder={props.bio}/>

              <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-default pull-right"
                      >
                Update
              </button>
          </div>
      </div>
  < br />
      <div className="col-md-4">
        <div className="input-group">
          <input value={props.zipcode}
            onChange={props.handleInputChange}
            name="zipcode"
            type="number"
            className="form-control"
            placeholder="Zipcode" />
          <span className="input-group-btn">
            <button 
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-default">
                Update
            </button>
          </span>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <span className="pull-left">
            <select 
                className="selectpicker" 
                id="pactivity-input"
                name="activity"
                type="text"
                value={props.activity}
                onChange={props.handleInputChange}>
                <option selected>Select Activity</option>
                <option value="hiking">Hiking</option>
                <option value="running">Runnning</option>
                <option value="dancing">Dancing</option>
                <option value="rock climbing">Rock Climbing</option>
            </select>
          </span>
              <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-default pull-left"
                id="activitybtn"
                      >
                Update
              </button>
         </div>
      </div>
    </div>
  </form>
</div>
</div>


export default Myprofile;