import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Userprofile from "../components/Userprofile";
import API from "../utils/API";


class User extends Component {
  state = {
    sidekick: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSkick(this.props.match.params.id)
      .then(res => this.setState({ sidekick: res.data }))
      .catch(err => console.log(err));
  }

  render() {

     return ( 

      <Container>

       <Row> Name </Row>
       <Row> Image</Row>
       <Row> Bio </Row>
        


      
        

      <button onclick="location.href='mailto:em@i.l';">send mail</button>

      </Container>
    );
  }
}

    {/*  <Row> {this.props.name} Name </Row>
       <Row>{this.props.image}  Image</Row>
       <Row>{this.props.bio} Bio </Row>*/}

export default User;
