import React, {Component} from 'react';

import { FacebookLoginButton } from "react-social-login-buttons";
import './landingpage.css'

class FacebookSigninButton extends Component {

  render() {
    return (
        <a href="/auth/facebook" >
          <FacebookLoginButton />
        </a>
    );
  }
}

export default FacebookSigninButton;