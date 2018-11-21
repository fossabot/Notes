import {combineReducers} from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import { reducer as reduxFormReducer } from 'redux-form';


export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  form: reduxFormReducer
});