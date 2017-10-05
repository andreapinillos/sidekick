import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Activity from "../components/Activity";

class SelectActivity extends Component {
  state = {
    hike: "",
    climb: "",
    dance: ""
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

  };

  render() {
    return (
      <div>
      <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Select Your Activity!</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col size="md-12">
        <Activity
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Col>
      </Row>
      </Container>
      </div>
    );
  }
}

export default SelectActivity;