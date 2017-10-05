import React from "react";
import Col from "../Col";
import "./Myprofile.css";



const Myprofile = props =>

<div className="container">
<div className="myprofilecontainer">
<h1 id="changeinfo">Update your Information</h1>
  
<div className="row">
  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <a className="thumbnail fancybox" rel="ligthbox" href={props.image}>
        <img className="img-responsive" alt="nothing to display" src={props.image} />
    </a>
  </div>
  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
      <div className="well">
        Name: {props.name}
      </div>
      <div className="well">
        Email: {props.email}
      </div>
      <div className="well">
        About me: {props.bio}
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
              <label for="email" style={{fontFamily:'Montserrat'}}>Email</label>
                <textarea 
                style={{fontFamily:'Montserrat'}}
                className="bio form-control" 
                rows="1"
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                type="text"
                placeholder={props.email}/>

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
          <input style={{fontFamily:'Montserrat'}}
            value={props.zipcode}
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

        <div className="row">
      <div className="col-md-8">
          <div className="form-group biogroup">
              <label for="bio" style={{fontFamily:'Montserrat'}}>About me</label>
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
        <div className="form-group biogroup" id="uploadpic">
        <label for="image" style={{fontFamily:'Montserrat'}}>Change Image</label>
           <input 
               className="bio form-control" 
                style={{fontFamily:'Montserrat'}}
                id="Attachment" 
                text="Attachment" 
                name="image"
                value={props.image}
                onChange={props.handleInputChange}
                type="file"
                placeholder={props.image} />
              <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-default pull-right"
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