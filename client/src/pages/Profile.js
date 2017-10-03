import React, { Component } from "react";
<<<<<<< HEAD
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Form from "../components/Form";
import Myprofile from "../components/Myprofile";
import API from "../utils/API";
=======
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Bio from "../components/Bio";
>>>>>>> df039959b2eb99792d0489ed66b4fa586eb312bc


class Profile extends Component {
  state = {
<<<<<<< HEAD
    username: "Anastasia Mark",
    id: "10159562313540601",
    email: "omishark@gmail.com",
    bio: "",
    picture: "http://rs845.pbsrc.com/albums/ab16/Zets773/wee_ninja_new.jpg?w=280&h=210&fit=crop",
    zipcode: "",
    activity: ""
  };
=======
    bio: "",
    //activity: "",
    //status: ""//Pull and set status from database--change status button will set this state.
    };
>>>>>>> df039959b2eb99792d0489ed66b4fa586eb312bc

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
<<<<<<< HEAD
    alert(`Your name is ${this.state.username} bio is ${this.state.bio} with current activity being ${this.state.activity} in this zip ${this.state.zipcode}`);
    API.saveSkick(this.state)
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
=======
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


>>>>>>> df039959b2eb99792d0489ed66b4fa586eb312bc

export default Profile;
