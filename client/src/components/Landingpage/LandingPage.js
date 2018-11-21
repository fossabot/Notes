import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoggedInLandingPage from './LoggedInLandingPage';
import LoggedOutLandingPage from './loggedOut/LoggedOutLandingPage';

class LandingPage extends Component {
  render() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <LoggedOutLandingPage/>;
      default:
        return <LoggedInLandingPage/>;
    }
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(LandingPage);