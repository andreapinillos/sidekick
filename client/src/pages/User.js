import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Userprofile from "../components/Userprofile";


class User extends Component {
  state = {
    sidekick: {}

  };


  render() {
    return (

      <Container>
       <Row> {this.state.sidekick.name} </Row>
       <Row>{this.state.sidekick.image}  </Row>
       <Row>{this.state.sidekick.bio} </Row>
        
         <button onclick="location.href='mailto:em@i.l';">send mail</button>

      </Container>

 

    );
  }
}

export default User;
