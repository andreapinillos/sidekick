import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Myprofile from "../components/Myprofile";


class Profile extends Component {
  state = {
    bio: "",
    zipcode: "",
    activity: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Your bio is ${this.state.bio} with current activity being ${this.state.activity} in this zip ${this.state.zipcode}`);
    this.setState({
      bio: "",
      activity:"",
      zipcode: ""

    });
  };

   handleUpdate = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`your current status is ${this.state.status}`);
    this.setState({
      status: this.state.status//Pull set status from database--change status button will set this state.
    });
  };
  render() {
    return (
        <Myprofile style={{ marginTop: 30 }}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleUpdate={this.handleUpdate}
        />

    );
  }

};

export default Profile;
