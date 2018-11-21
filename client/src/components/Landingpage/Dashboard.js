import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostList from '../posts/PostList';

class Dashboard extends Component {
  renderAddButton() {
    return (
        <div className="btn-block center-align" style={{margin: "10px"}}>
          <Link to="post/new" className="btn-floating btn-large btn container">
            <i className="large material-icons">add</i>
          </Link>
        </div>
    );
  }

  render() {
    console.log("Dashboard component is rendering", this.props);
    return (
        <div>
          <PostList/>
          {this.renderAddButton()}
        </div>
    );
  }
}

export default Dashboard;