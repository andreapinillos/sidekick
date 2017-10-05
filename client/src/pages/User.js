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
//import Login from "../components/Login";


class User extends Component {
  state = {
    sidekick: {},
    isloggedin: "",
    senderemail: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSkick(this.props.match.params.id)
      .then(res => this.setState({ sidekick: res.data }))
      .catch(err => console.log(err));

      //(this.props.isLoggedin) ? alert('logged in') : alert('please login')
      console.log(this.props.isLoggedin);
  };

  sendemail = () =>{
    var tosend = {
      idrecip: this.props.match.params.id,
      senderemail: this.state.senderemail
    }
    console.log ("you are in sendemail and this will be sent: " + JSON.stringify(tosend));
    API.submitemail(tosend)
    alert("The email have been sent to " + this.state.sidekick.name);
  }

  responseFacebook = (response) =>{
    console.log("fb email " + response.email)
    this.setState({
      senderemail: response.email
    })  

    if(response.name){
      this.setState({
        isloggedin: true,
      })
    }
  }


  render() {

const loggedin = this.state.isloggedin;
     
      return ( 

<div>
    {(loggedin) ? (

       <Container>        
        <Userprofile

          name = {this.state.sidekick.name} 
          activity = {this.state.sidekick.activity}
          bio = {this.state.sidekick.bio}
          zipcode = {this.state.sidekick.zipcode}
          image={this.state.sidekick.image} 
          onclick = {this.sendemail}
          isloggedin = {this.state.isloggedin}


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
      </Container>
      ) : (

   
<Container>
          <nav className="navbar navbar-default navbar-fixed-top">
               {alert('log in')}
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
}

export default User;
