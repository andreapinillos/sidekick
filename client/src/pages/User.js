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
  };

  sendemail() {
    console.log ("you are in sendemail");
    console.log("this is " + this.sidekick);
    var tosend = {
      id: this.state.sidekick._id,
      email: this.state.sidekick.email
    }
    console.log("the var id is " + tosend.id)
    API.submitemail(tosend)
  }.bind(this)


  render() {

     return ( 

      <Container>


        
        <Userprofile

          name = {this.state.sidekick.name} 
          activity = {this.state.sidekick.activity}
          bio = {this.state.sidekick.bio}
          zipcode = {this.state.sidekick.zipcode}
          image={this.state.sidekick.image} 

          />


      
<<<<<<< HEAD
      <button onClick={this.sendemail}>send mail</button>
        
=======
               {/*<Row> Name: {this.state.sidekick.name}</Row>
       <Row> Image: <img src={this.state.sidekick.image} alt="User pic" height="200" width="200"/></Row>
       <Row> Bio: {this.state.sidekick.bio} </Row>*/}
>>>>>>> 8e0d1ea8df105afff705d361d3f2611a1e82f276


      </Container>
    );
  }
}

export default User;
