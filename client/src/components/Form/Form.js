import React from "react";
import "./Form.css"; 

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Form = props =>
  <form className="profile" style={{ marginTop: 30}}>
    <div className="form-group">
      <label>Please Enter Your Info Below:</label>
      <input
        value={props.firstName}
        onChange={props.handleInputChange}
        name="firstName"
        type="text"
        className="form-control"
        placeholder="First Name"
      />
      <input
        value={props.lastName}
        onChange={props.handleInputChange}
        name="lastName"
        type="text"
        className="form-control"
        placeholder="Last Name"
      />
      <input
        value={props.email}
        onChange={props.handleInputChange}
        name="email"
        type="text"
        className="form-control"
        placeholder="Email"
      />
      <input
        value={props.shortBio}
        onChange={props.handleInputChange}
        name="shortBio"
        type="text"
        className="form-control"
        placeholder="Short Bio"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Submit
      </button>
    </div>
  </form>;

export default Form;
