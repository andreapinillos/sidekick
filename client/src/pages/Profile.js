import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Bio from "../components/Bio";


class Profile extends Component {
  state = {
    bio: "",
    //activity: "",
    //status: ""//Pull and set status from database--change status button will set this state.
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
    alert(`Your bio is set at ${this.state.bio}`);
    this.setState({
      bio: this.state.bio,
    });
  };

render () {

return (

  <Bio style={{ marginTop: 30 }}
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}
  />


  );
  }
};



export default Profile;
