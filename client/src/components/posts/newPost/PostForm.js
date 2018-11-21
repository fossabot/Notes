import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import PostField from '../PostField';
import {Link} from 'react-router-dom';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const maxLength200 = maxLength(200);

class PostForm extends Component {
  renderField(type, name, lebel, component, validate) {
    return (
        <Field
            type={type}
            name={name}
            label = {lebel}
            component={component}
            validate={validate}
        />
    );
  }

  renderFields() {
    return (
        <div>
          {this.renderField("text", "title", "Post Title", PostField, [ required, maxLength15 ])}
          {this.renderField("text", "body", "Post Body", PostField, [ maxLength200 ])}
        </div>
    );
  }

  render() {
    return (
        <div>
          <form onSubmit={this.props.handleSubmit(() => this.props.onPostSubmit())} >
            {this.renderFields()}
            <Link to="/post" className="red btn-flat left white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Submit
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
      );
  }
}



export default reduxForm({
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm);
