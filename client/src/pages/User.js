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

       <Row> Name: {this.state.sidekick.name}</Row>
       <Row> Image: <img src={this.state.sidekick.image} alt="User pic" height="200" width="200"/></Row>
       <Row> Bio: {this.state.sidekick.bio} </Row>
        


      
        

      {/*  <button onClick="location.href='mailto:em@i.l';">send mail</button>*/}

      </Container>
    );
  }
}

export default User;
