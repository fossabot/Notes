import React, {Component} from 'react';

class LogoutButton extends Component {

  render() {
    return (
        <button className="btn" style={{ margin: "0 10px"}}>
          <a href="/api/logout">
            Logout
          </a>
        </button>
    );
  }
}

export default LogoutButton;