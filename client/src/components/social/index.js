import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class Social extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="1271186439693753"
        scope="public_profile,email"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    )
  }
}
 
export default Social;