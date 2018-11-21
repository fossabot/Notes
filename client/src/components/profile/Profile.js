import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import DeleteProfileButton from './DeleteProfileButton';

class Profile extends Component {

  renderField(title, value) {
    if(!value) {
       return (<div></div>);
    }
    return (
      <li>
        <span className="container grey-text text-darken-1 ">
          <h4 className="brown-text text-darken-1">{title}</h4>
          <blockquote className="flow-text text-darken-1">{value}</blockquote>
        </span>
      </li>
    );
  }

  renderDeleteProfileField() {
    return (
        <li>
          <span className="container grey-text text-darken-1 ">
            <h4 className="brown-text text-darken-1">Do You Want to delete your profile?</h4>
            <DeleteProfileButton/>
          </span>
        </li>
    );
  }

  render() {
    if(!this.props || !this.props.auth || !this.props.auth.name) {
      return (<div></div>);
    }
    return (
      <main className="valign-wrapper container">
        <ul>
          {this.renderField('email', this.props.auth.email)}
          {this.renderField('name', this.props.auth.name)}
          {this.renderField('credits', this.props.auth.credits)}
          {this.renderDeleteProfileField()}
        </ul>
      </main>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Profile);