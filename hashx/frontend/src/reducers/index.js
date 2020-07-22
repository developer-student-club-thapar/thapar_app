import { combineReducers } from 'redux';
import AuthReducer from '../reducers/authReducer';

export default combineReducers({
  auth: AuthReducer,
});
