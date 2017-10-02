import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class Social extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="1271186439693753"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
 
export default Social;