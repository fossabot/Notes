import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class SideBar extends Component {
  render() {
    console.log("sidebart",this.props);
    if(this.props && this.props.auth) {
      return (
          <ul id="nav-mobile" className="sidenav sidenav-fixed" style={{width: "20%"}}>

            <li><a href="/post"><i className="material-icons">library_books</i>My Posts</a></li>
            <li><a href="/profile"><i className="material-icons">person_outline</i>Profile</a></li>
            <li><a href="/help"><i className="material-icons">live_help</i>Help</a></li>

          </ul>
      );
    }
    return <div></div>;
  }
}

function mapStateToProps (state) {
  console.log("mapStateToProps in Sidebar", state);
  return {auth: state.auth};
}

export default connect(mapStateToProps)(SideBar);