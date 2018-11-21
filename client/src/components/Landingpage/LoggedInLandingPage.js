import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoggedInLandingPage extends Component {
  render() {
    return (
        <div>
          <div>
            <h5 className="center-align">
              <a href='/post' >
                Welcome To Notes
              </a>
            </h5>
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(LoggedInLandingPage);