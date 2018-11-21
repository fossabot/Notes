import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteProfileButton extends Component {

  render() {
    return (
        <a href="/api/user/delete">
          <button className="btn waves-effect waves-light">
            Delete Profile
            <i className="material-icons right">delete_forever</i>
          </button>
        </a>
    );
  }
}

export default DeleteProfileButton;
