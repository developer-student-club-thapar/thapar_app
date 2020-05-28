import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  SET_LOADING,
  RESET_STATE,
} from '../types';

const defaultState = {
  id: null,
  token: null,
  isAuthenticated: null,
  loading: false,
  username: null,
  email: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_USER:
      return {
        ...state,
        id: null,
        isAuthenticated: false,
        loading: false,
        email: null,
        username: null,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_STATE:
      return defaultState;
    default:
      return state;
  }
};
