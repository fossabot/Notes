import React, {Component} from 'react';
import PostForm from './PostForm';
import PostReview from './PostReview';
import {reduxForm} from "redux-form";

class PostNew extends Component {
  state = {formReview: false};
  renderContent() {
    if(this.state.formReview) {
      return <PostReview
        onCancel = { () => this.setState({formReview: false})}
      />
    } else {
      return <PostForm
        onPostSubmit = { () => this.setState({formReview: true})}
      />
    }
  }

  render() {
    return (
        <div>
          {this.renderContent()}
        </div>
      );
  }
}

export default reduxForm({
  form: 'postForm',
})(PostNew);
