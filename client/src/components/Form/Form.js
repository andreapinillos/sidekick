import React from "react";
import Col from "../Col";
import "./Form.css"; 


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Form = props =>
  <form className="profile" style={{ marginTop: 30}}>
    <div className="form-group">

       <div className="row">
     
          <Col size="md-2">
              
              <input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                type="text"
                className="form-control"
                placeholder="Zipcode"
              />
      
          </Col>

          <Col size="md-4">
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
                  className="btn btn-default pull-left"
                >
                  Search
                </button>


          </Col>


           <Col size="md-6">
     <div className="form-group">
              <button
                type="submit"
                onClick={props.handleUpdate}
                className="btn btn-default pull-right"
              >
                Update
              </button>

            <span className="pull-right">

            <select 
              className="selectpicker" 
              id="activity-input"
              name="status"
              type="text"
              value={props.status}
              onChange={props.handleInputChange}>
              <option selected>Set Status</option>
              <option value="hiking">Hiking</option>
              <option value="running">Runnning</option>
              <option value="dancing">Dancing</option>
              <option value="rock climbing">Rock Climbing</option>
            </select>
            </span>

      
     </div>
            </Col>
      </div>
    </div>






</form>;

export default Form;
