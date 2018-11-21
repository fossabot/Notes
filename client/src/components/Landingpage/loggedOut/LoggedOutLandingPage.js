import React, {Component} from 'react';
import {connect} from 'react-redux';
import './landingpage.css'
import SigninButtons from './SigninButtons';

class LoggedOutLandingPage extends Component {
  render() {
    return (
        <main className="valign-wrapper">
          <span className="container grey-text text-darken-1 ">
            <p className="flow-text">Welcome to</p>
            <h1 className="title brown-text text-darken-1">Notes</h1>
            <blockquote className="flow-text text-darken-1">A place to Store your daily notes</blockquote>
            <SigninButtons/>
          </span>
        </main>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(LoggedOutLandingPage);