import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Form from "../components/Form";
import Alert from "../components/Alert";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    shortBio: ""
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
    alert(`Hello ${this.state.firstName} ${this.state.lastName}! Your email is: ${this.state.email} and your short bio is: ${this.state.shortBio}`);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      shortBio: ""
    });
  };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Profile Information</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
      </Container>
    );
  }
}

export default Profile;
