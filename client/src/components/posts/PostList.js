import React, {Component} from 'react';
import * as actions from '../../actions';

import {connect} from 'react-redux';
import {withRouter} from 'react-router';


class PostList extends Component {
  componentDidMount() {
    console.log("Component did mount on", PostList);
    this.props.fetchAllPosts();
  }


  renderCardPart(title, value) {
    return (
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <p>{value}</p>
        </div>
    );
  }

  renderPosts() {
    console.log("rendering PostList", this.props);
    if(Array.isArray(this.props.posts)) {
      console.log("its an array", this.props);
      return this.props.posts.reverse().map( post => {
        return (
            <div key = {post._id} className="card blue-grey darken-1">
              {this.renderCardPart(post.title, post.body)}

              <div className="card-action">

                <a className="waves-effect waves-light btn red" onClick={ () => this.props.deletePost(post._id, this.props.history)} style={{ margin: "0 10px"}}>
                  <i className="material-icons left">delete</i>
                  Delete
                </a>

              </div>
            </div>
        );
      });
    } else {
      return(
        <div>
          <h4 className="center-align">
            <span>To create your first post:</span><br/>
            1. Add credits <br/>
            2. start on with + button
          </h4>
        </div>
      );
    }
  }

  render() {
    return (
        <div>
          {this.renderPosts()}
        </div>
      );
  }
}


function mapStateToProps (state) {
  console.log("mapStateToProps in PostList", state);
  return {posts: state.posts};
}

export default connect(mapStateToProps, actions)(withRouter(PostList));
