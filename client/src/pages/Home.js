import React, { Component } from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import sidekicksjson from "../components/friends.json";
import List from "../components/List";
import People from "../components/People"
import API from "../utils/API";
import Social from '../components/social'
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from './sidekick.svg';
import "./social.css";
import FacebookLogin from 'react-facebook-login';

class Home extends Component {
  state = {
    sidekickperm: [],
    sidekickrender: [],
    zipcode: "",
    activity: "",
    isloggedin: false
    // userID,
    // username,
    // userpic,

    //status: ""//Pull and set status from database--change status button will set this state.
    };

  componentDidMount() {
    this.loadSkicks();
  }

  loadSkicks = () => {
    API.getSkicks()
      .then(res => this.setState({ sidekickperm: res.data, sidekickrender: res.data }))
      .then(console.log("in the log " + this.state.sidekickperm))
      .catch(err => console.log(err));
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
    alert(`You are looking in ${this.state.zipcode} for ${this.state.activity}, your current status is ${this.state.status}`);
        var zippy = this.state.zipcode;
        var acty = this.state.activity;
        console.log("your filters are " + zippy  + " " + acty)
        console.log("state practice " + this.state.sidekickperm[0].activity)
    this.setState({
      // long turnery if statement that decides which way to filter the sidekicks array based on user input
          sidekickrender: this.state.sidekickperm.filter(sidekick => 
        (zippy && (acty !="select")) ? (sidekick.zipcode == zippy && sidekick.activity == acty) 
         : (zippy) ? (sidekick.zipcode == zippy) 
         : (acty !="select") ? sidekick.activity == acty 
         : sidekick == sidekick)
    });
     //console.log(sidekickPull.filter(sidekick => sidekick === sidekick));
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
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center" style={{ marginTop: 30 }}></h1>
        <Form style={{ marginTop: 30 }}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleUpdate={this.handleUpdate}
        />
      <Row>
        <Col size="lg-12">
            {this.state.sidekickrender.length ? (
            <List>
            {this.state.sidekickrender.map(sidekick => (
              <People 
                  name = {sidekick.name} 
                  activity = {sidekick.activity}
                  bio = {sidekick.bio}
                  image={sidekick.image}
                  href = {"/users/" + sidekick._id}                  
              />
            ))}
            </List>
            ) : (
            <h3>No Results to Display</h3>
            )}
        </Col>

      </Row>
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

export default Home;
