import React from "react";
import "./Activity.css";
// Using the datalist element we can create autofill suggestions based on the props.breeds array
const activityIcon = props =>
  <div className="form-group">
    <input 
    style={{ margin: 20 }}
    type="radio" name="emotion" 
    id="sad" class="input-hidden" />
    <label for="sad">
       <img 
        src="https://d30y9cdsu7xlg0.cloudfront.net/png/81057-200.png" 
         alt="hike"/>
      </label>

    <input style={{ margin: 20 }}
      type="radio" name="emotion"
       id="happy" class="input-hidden" />
    <label for="happy">
      <img 
    src="https://d30y9cdsu7xlg0.cloudfront.net/png/31528-200.png" 
    alt="climb" />
    </label>

    <input style={{ margin: 20 }}
    type="radio" name="emotion"
    id="dance" class="input-hidden" />
    <label for="dance">
    <img 
    src="https://image.freepik.com/free-icon/flamenco-couple-dancing_318-56218.jpg" 
    alt="dance" />
      <button style={{ margin: 20 }}
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >Submit
      </button>
    </label>
   </div>;

export default activityIcon;

