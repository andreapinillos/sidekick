import React from "react";
import Col from "../Col";
import "./Login.css"; 


class Login extends React.Component {

  renderUserMessage(){
    if (this.props.loggedIn ==== true) {
      return (
        <span>
          <h2>{ `Welcome Back ${ this.props.name }` }</h2>
          <p>You can visit settings to reset your password</p>
        </span>
      );
    } else {
      return (
        <h2>Please Login</h2>
      );
    }
  }

  render (){        
    return(
      <div>
        <h1>My Super React App</h1>
        { this.renderUserMessage() }
      </div>
    )
  }
}
export default Login;
