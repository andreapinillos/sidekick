import React from "react";
import Col from "../Col";
import "./Form.css"; 


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Form = props =>
<div className="container">
  <form className="profile" style={{ marginTop: 30}}>
    <div className="form-group">

       <div className="row">
          <Col size="xs-4">
              
              <input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                type="text"
                className="form-control"
                placeholder="Zipcode"
              />
          </Col>
          <Col size="md-6">
            <span className="pull-left">
            <select 
              className="selectpicker" 
              id="activity-input"
              name="activity"
              type="text"
              value={props.activity}
              onChange={props.handleInputChange}>
              <option selected value="select">Select Activity</option>
              <option value="hiking">Hiking</option>
              <option value="running">Running</option>
              <option value="dancing">Dancing</option>
              <option value="rock climbing">Rock Climbing</option>
            </select>
              </span>
            
               <button
                  type="submit"
                  onClick={props.handleFormSubmit}
                  className="btn btn-default"
                >
                  Search
                </button>
  </Col>
                </div>
    </div>

</form>
</div>;

export default Form;
