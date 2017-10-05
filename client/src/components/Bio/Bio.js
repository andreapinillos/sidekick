import React from "react";
import Col from "../Col";
import "./Bio.css"; 


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Bio = props =>
  <form className="bio" style={{ marginTop: 30}}>
  

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
        </div>

        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-default"
                >
          Update
        </button>


</form>;

export default Bio;
