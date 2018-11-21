import React, {Component} from 'react';

import { GoogleLoginButton } from "react-social-login-buttons";
import './landingpage.css'


const style = {width:"230px"};

class GoogleSigninButton extends Component {

  render() {
    return (
        <a href="/auth/google" >
          <GoogleLoginButton/>
        </a>
    );
  }
}

export default GoogleSigninButton;