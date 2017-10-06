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
    me:{
      "name": "name",
      "email": "email",
      "bio": "bio",
      "image": "image",
      "zipcode": "00000",
      "activity": "hiking",
      "fbid": "1234"
    },
    tempname: "tempname",
    tempemail: "tempemail",
    imguseID: "img.jpg",
    isloggedin: true
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    var tempstateME = this.state.me;
    console.log("name is " + name + " and value is " + value)
    console.log("checking state pull " + this.state.me.email)
    tempstateME[name] = value;
    console.log("temstate email " + JSON.stringify(tempstateME))
    
    this.setState({
      me:tempstateME
    });
    console.log("the state email: " + this.state.me.email)
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Your name is ${this.state.me.name} bio is ${this.state.me.bio} with current activity being ${this.state.me.activity} in this zip ${this.state.me.zipcode}`);
    var tosend ={
      route: this.state.me._id,
      data:this.state.me
    }

    API.updateSkick(tosend)
    .then(console.log("you sent"))
    .catch(err => console.log(err));
  };

  responseFacebook = (response) => {
    var theFBid = response.id

    // look up this user based on fb id  
    API.getmyprof(theFBid)
    .then(res => this.dealwithFB(res))
    .catch(err => console.log(err));

    //set temp variables incase of first login and to render image
    this.setState({ tempname: response.name, tempemail: response.email, imguseID: response.id})      
  }

  dealwithFB = (res) =>{
    if(res.data){
      this.setState({ me: res.data })
      console.log("checking the state " + this.state.me.fbid+" "+this.state.me.email)
    }
    else{
      var tempuser = {
        name: this.state.tempname,
        email: this.state.tempemail,
        bio: "Profile is incomplete! Please add a bio, zipcode and activity you are interested in so you can make connections!",
        image: "https://graph.facebook.com/" + this.state.imguseID + "/picture?width=300&height=300",
        zipcode: "00000",
        activity: "activity",
        fbid: this.state.imguseID
      }
      //create new user
      API.saveSkick(tempuser)
      //update state with user info
      this.setState({me:tempuser})
    }

  }    


  render() {
    return (
      <Container>
          <Myprofile style={{ marginTop: 30 }}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleUpdate={this.handleUpdate}
            name= {this.state.me.name}
            email= {this.state.me.email}
            bio= {this.state.me.bio}
            image= {this.state.me.image}
            zipcode= {this.state.me.zipcode}
            activity= {this.state.me.activity}
            imguseID={this.state.imguseID}
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
                    {/* */}
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
                     {/* */}
                    <li>
                      <button id="profilelink">
                        <a href="/profile" className="aproflink">Profile</a>
                      </button>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
      </Container>
  

    );
  }

};

export default Profile;
