import React, {Component} from 'react';
import {connect} from 'react-redux';

import PaymentsButton from './PaymentsButton';
import LogoutButton from './LogoutButton';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
      case null:
        return;
      default:
        return [
          <li key="1"><PaymentsButton/></li>,
          <li key="2" style={{ margin: "0 10px"}}>
            Credits: {this.props.auth.credits || 0}
          </li>,
          <li key="3"><LogoutButton/></li>
        ];
    }
  }

  render() {
    console.log("Header component is rendering");
    return (
        <nav>
          <div className="nav-wrapper blue-grey header-fixed-on-top">

            <a href={this.props.auth ? '/post' : '/'} className="left brand-logo">
              Notes
              <i style={{ margin: "0 10px"}} className="large material-icons">book</i>
            </a>

            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>

          </div>
        </nav>
    );
  }
}

function mapStateToProps (state) {
  console.log("mapStateToProps in Header", state);
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);