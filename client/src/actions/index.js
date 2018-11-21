import axios from 'axios';
import {FETCH_USER, FETCH_POSTS} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  console.log("fetched User (Action)", res);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};


export const handlePaymentToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};


export const createPost = (formValues, history) => async (dispatch) => {
  const res = await axios.post('/api/post', formValues);
  console.log("Create Post (Action)", res);
  history.push('/post');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const updatePost = (postId, formValues, history) => async (dispatch) => {
  const res = await axios.put(`/api/post/${postId}`, formValues);
  console.log("Update Post (Action)", res);
  history.push('/post');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const deletePost = (postId, history) => async (dispatch) => {
  console.log("Del post with Id", postId);
  const res = await axios.delete(`/api/post/${postId}`);
  console.log("Delete Post (Action)", res);
  history.push('/post');
  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  });
};

export const fetchAllPosts = () => async (dispatch) => {
  const res = await axios.get('/api/post');
  console.log("Get All Post (Action)", res);
  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  });
};