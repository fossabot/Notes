import React from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from '../../../actions/index';
import {withRouter} from 'react-router';

const PostReview = ({onCancel, formValues, createPost , history}) => {

  function renderField(title, value) {
    return (
        <div>
          <label>
            {title}
          </label>

          <div>
            {value}
          </div>
        </div>
    );
  }

  return (
      <div>
        <h5>
          Please confirm your previous post
        </h5>

        {renderField('Title', formValues.title)}
        {renderField('Body', formValues.body)}

        <button className="yellow darken-3 btn-flat" onClick={onCancel}>
          Cancel
        </button>

        <button
          className="green darken-2 btn-flat right"
          onClick={ () => createPost(formValues, history)}
        >
          Confirm
        <i className="material-icons right">save</i>
        </button>

      </div>
    );
};

function mapStateToProps (state) {
  return {formValues: state.form.postForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(PostReview));
