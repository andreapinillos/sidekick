import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Userprofile from "../components/Userprofile";
//import EmailBtn from "../components/EmailBtn";
import API from "../utils/API";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import "./social.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from './sidekick.svg';

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

  sendemail = () =>{
    console.log ("you are in sendemail");
    console.log("this is " + this.state.sidekick.bio);
    var tosend = {
      id: this.state.sidekick._id,
      recipientemail: this.state.sidekick.email
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

          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  <img src={img} />
                </Link>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <button id="profilelink">
                        <a href="/profile" className="aproflink">Profile</a>
                      </button>
                    </li>
                    <li>
                      <FacebookLogin
                      appId="1271186439693753"
                      scope="public_profile,email"
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      cssClass="my-facebook-button-class"
                      icon="fa-facebook"
                      />
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
      </Container>
    );
  }
}

export default User;
