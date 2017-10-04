import React, { Component } from "react";
import Myprofile from "../components/Myprofile";
import API from "../utils/API";
import FacebookLogin from 'react-facebook-login';
import Container from "../components/Container";

import "./social.css";


class Profile extends Component {
  state = {
    name: "",
    id: "10159562313540601",
    email: "",
    bio: "this bio state has not been changed",
    image: "",
    zipcode: "00000",
    activity: "hiking",
    isloggedin: true
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

  responseFacebook = (response) => {
    console.log(response)
    
    this.setState({
      name: response.name,
      email: response.email,
      image:response.picture.data.url
    });
  }    


  render() {
    return (
      <Container>
          <Myprofile style={{ marginTop: 30 }}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleUpdate={this.handleUpdate}
            name= {this.state.name}
            email= {this.state.email}
            bio= {this.state.bio}
            image= {this.state.image}
            zipcode= {this.state.zipcode}
            activity= {this.state.activity}
          />
      
          <FacebookLogin
          appId="1271186439693753"
          scope="public_profile,email"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </Container>
  

    );
  }

};

export default Profile;
