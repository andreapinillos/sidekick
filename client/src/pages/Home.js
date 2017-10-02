import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
//import { CardList, CardItem } from "../components/Card";
import FriendCard from "../components/FriendCard";
import sidekicks from "../components/friends.json";
import List from "../components/List";
import People from "../components/People"

const sidekickPull = sidekicks;

class Home extends Component {
  state = {
    sidekicks,
    zipcode: "",
    activity: "",
    isloggedin: false
    // userID,
    // username,
    // userpic,

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
    alert(`You are looking in ${this.state.zipcode} for ${this.state.activity}, your current status is ${this.state.status}`);
    this.setState({
      zipcode: this.state.zipcode,
      activity: this.state.activity,
      status: this.state.status,//Pull set status from database--change status button will set this state.
      // long turnery if statement that decides which way to filter the sidekicks array based on user input
      sidekicks: sidekickPull.filter(sidekick => 
        (this.state.zipcode && (this.state.activity !="select")) ? (sidekick.zipcode == this.state.zipcode && sidekick.activity == this.state.activity) 
        : (this.state.zipcode) ? (sidekick.zipcode == this.state.zipcode) 
        : (this.state.activity !="select") ? sidekick.activity == this.state.activity 
        : sidekick === sidekick)
    });
    console.log(sidekickPull.filter(sidekick => sidekick === sidekick));
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
            {this.state.sidekicks.length ? (
            <List>
            {this.state.sidekicks.map(sidekick => (
              <People 
                  name = {sidekick.name} 
                  activity = {sidekick.activity}
                  bio = {sidekick.bio}
                  image={sidekick.image}
                  key = {sidekick.id}                  
              />
            ))}
            </List>
            ) : (
            <h3>No Results to Display</h3>
            )}
        </Col>

      </Row>
      </Container>
    );
  }
}



// <Link to={"/sidekicks/" + sidekick._id}>
// <ConnectBtn />
//</Link>
        // <Col size="md-6">
        //   {this.state.sidekicks.length ? (
        //    <CardList>
        //         {this.state.sidekicks.map(sidekick => (
        //           <CardItem key={sidekick._id}>
        //               name = {sidekick.name} 
        //               activity = {sidekick.activity}
        //               zipcode = {sidekick.zipcode}
        //           </CardItem>
        //         ))}
        //       </CardList> 
        //       ) : (
        //     <h3>No Results to Display</h3>
        //   )}
        // </Col>


export default Home;
