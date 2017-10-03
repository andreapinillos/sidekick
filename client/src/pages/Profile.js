import React, { Component } from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Form from "../components/Form";
import Myprofile from "../components/Myprofile";
import API from "../utils/API";


class Profile extends Component {
  state = {
    name: "Anastasia Mark",
    id: "10159562313540601",
    email: "omishark@gmail.com",
    bio: "",
    image: "http://rs845.pbsrc.com/albums/ab16/Zets773/wee_ninja_new.jpg?w=280&h=210&fit=crop",
    zipcode: "",
    activity: ""
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
    alert(`Your name is ${this.state.username} bio is ${this.state.bio} with current activity being ${this.state.activity} in this zip ${this.state.zipcode}`);
    API.saveSkick({
      name: this.state.name,
      id: this.state.id,
      email: this.state.email,
      bio: this.state.bio,
      image: this.state.image,
      zipcode: this.state.zipcode,
      activity: this.state.activity
    })
    .catch(err => console.log(err));

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
