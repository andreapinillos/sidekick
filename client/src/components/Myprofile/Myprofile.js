import React from "react";
import Col from "../Col";
import "./Myprofile.css";

const Myprofile = props =>

<div className="container">
<h1>Change your Info</h1>

<div className="row">
  <div className="col-sm-4">
    User picture goes here
  </div>
  <div className="col-sm-6">
    User information goes here
  </div>  
</div>

  <form className="myprofile" style={{ marginTop: 30}}>
    <div className="row">
      <div className="col-sm-4">
          <div className="form-group">
              <label for="bio">Bio</label>
              <textarea 
              className="bio" 
              rows="5"
              value={props.bio}
              onChange={props.handleInputChange}
              name="bio"
              type="text"
              placeholder={props.bio} />

              <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-default"
                      >
                Update
              </button>
          </div>
      </div>
      <div className="col-sm-4">
          <div className="form-group">             
              <input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                type="number"
                className="form-control"
                placeholder="Zipcode"
              />
              <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-default"
                    >
              Update
            </button>
          </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <span className="pull-left">
            <select 
                className="selectpicker" 
                id="activity-input"
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
                className="btn btn-default"
                      >
                Update
              </button>
         </div>
      </div>
    </div>
  </form>
</div>


export default Myprofile;