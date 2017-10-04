import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Userprofile from "../components/Userprofile";
import API from "../utils/API";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import "./social.css";

class User extends Component {
  state = {
    sidekick: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSkick(this.props.match.params.id)
      .then(res => this.setState({ sidekick: res.data }))
      .catch(err => console.log(err));
  };

  sendemail() {
    console.log ("you are in sendemail");
    //console.log("this is " + this.state.sidekick.bio);
    // var tosend = {
    //   id: this.state.sidekick._id,
    //   email: this.state.sidekick.email
    // }
    var tosend = {
      id: 123
    }
    console.log("the var id is " + tosend.id)
    API.submitemail(tosend)
  }

  responseFacebook(response) {
    console.log(response)
    
  }

  render() {

     return ( 

      <Container>


        
        <Userprofile

          name = {this.state.sidekick.name} 
          activity = {this.state.sidekick.activity}
          bio = {this.state.sidekick.bio}
          zipcode = {this.state.sidekick.zipcode}
          image={this.state.sidekick.image} 
          onclick = {this.sendemail}

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
}

export default User;
