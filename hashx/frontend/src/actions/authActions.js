import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  SET_LOADING,
  RESET_STATE,
} from '../types';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

//Register User
export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.post('/register/', formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
  }
};

//Login User
export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.post(
      'http://localhost:8000/register/',
      formData,
      config,
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

//Logout User
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

//Login Fail
export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//Reset State
export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
