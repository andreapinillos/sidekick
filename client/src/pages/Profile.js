import React, { Component } from "react";
import Myprofile from "../components/Myprofile";
import API from "../utils/API";
import FacebookLogin from 'react-facebook-login';
import Container from "../components/Container";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from './sidekick.svg';
import "./social.css";


class Profile extends Component {
  state = {
    name: "",
    id: "",
    email: "",
    bio: "",
    image: "",
    zipcode: "",
    activity: "",
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
    alert(`Your name is ${this.state.name} bio is ${this.state.bio} with current activity being ${this.state.activity} in this zip ${this.state.zipcode}`);
    API.saveSkick({
      name: this.state.name,
      id: this.state._id,
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
      id: response.id,
      name: response.name,
      email: response.email,
      // image:response.picture.data.url
    });
  }    


  render() {

    const loggedin = this.state.isloggedin;

    return (
<div>
    {(loggedin) ? (

      <Container>
          <Myprofile style={{ marginTop: 30 }}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleUpdate={this.handleUpdate}
            name= {this.state.name}
            email= {this.state.email}
            bio= {this.state.bio}
            id= {this.state.id}
            image= {this.state.image}
            zipcode= {this.state.zipcode}
            activity= {this.state.activity}
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
      ) : (
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
            
               
                    </li>
                  </ul>
              </div>
            </div>
          </nav>


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




      )}
    </div>















    );
  }

};

export default Profile;
