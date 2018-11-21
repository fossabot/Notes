import React, {Component} from 'react';

import FacebookSigninButton from './FacebookSigninButton';
import GoogleSigninButton from './GoogleSigninButton';

class SigninButtons extends Component {

  render() {
    return (
        <div style={{ margin:"10px"}}>
          <FacebookSigninButton/>
          <GoogleSigninButton/>
        </div>
    );
  }
}

export default SigninButtons;