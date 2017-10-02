import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import { CardList, CardItem } from "../components/Card";




class Home extends Component {
  state = {
    sidekicks: [],
    zipcode: "",
    activity: "",
    status: ""//Pull and set status from database--change status button will set this state.
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
      status: this.state.status//Pull set status from database--change status button will set this state.
    });
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



      <div className="row">
          <CardList>
                {this.state.sidekicks.map(book => (
                  <CardItem>
                      <strong>
                        {this.state.zipcode} 
                        {this.state.activity}
                        {this.state.status}
                      </strong>
                  </CardItem>
                ))}
              </CardList>

      </div>
      </Container>
    );
  }
}




/*  
           <CardList>
                {this.state.sidekicks.map(book => (
                  <CardItem key={sidekick._id}>
                    <Link to={"/sidekicks/" + sidekick._id}>
                      <strong>
                        {sidekick.name} 
                        {sidekick.status}
                        {sidekick.author}
                        {sidekick.author}
                      </strong>
                    </Link>
                    <ConnectBtn />
                  </CardItem>
                ))}
              </CardList>*/

export default Home;
