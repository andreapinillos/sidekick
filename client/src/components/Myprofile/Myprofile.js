import React from "react";
import Col from "../Col";
import "./Myprofile.css";



const Myprofile = props =>

<div className="container">
<div className="myprofilecontainer">
<h1 id="changeinfo">Update your Information</h1>
  
<div className="row">
  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
 <a className="thumbnail fancybox" rel="ligthbox" href={"https://graph.facebook.com/" + props.imguseID + "/picture?width=300&height=300"}>
        <img className="img-responsive" alt="nothing to display" src={"https://graph.facebook.com/" + props.imguseID + "/picture?width=300&height=300"} />
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
              <label htmlFor="email" style={{fontFamily:'Montserrat'}}>Email</label>
                <textarea 
                className="bio form-control" 
                rows="1"
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                type="text"
                placeholder={props.email}/>

          </div>
      </div>
  < br />

      <div className="col-md-4">
        <div className="form-group zipinput">
        <label style={{fontFamily:'Montserrat'}}>Zipcode</label>
          <textarea value={props.zipcode}
            rows="1"
            onChange={props.handleInputChange}
            name="zipcode"
            type="number"
            className="form-control"
           />
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
         </div>
      </div>
    </div>

        <div className="row">
      <div className="col-md-8">
          <div className="form-group biogroup">
              <label htmlFor="bio" style={{fontFamily:'Montserrat'}}>About me</label>
                <textarea 
                className="bio form-control" 
                rows="5"
                value={props.bio}
                onChange={props.handleInputChange}
                name="bio"
                type="text"
                placeholder={props.bio}/>

          </div>
      </div>
  < br />
          <div className="col-md-4" style={{marginTop: "5rem"}}>
        <div className="form-group biogroup" id="uploadpic">
              <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-default myprofilebtn"
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