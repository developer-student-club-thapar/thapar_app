import React, { useState, createContext } from 'react';
import { getAccessToken } from '../util/token';

// import {getApiUrl} from  '../util/url'

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    username: '',
    id: '',
    token: '',
    googleToken: '',
    isAuthenticated: false,
    newUser: null,
  });

  const addGoogleToken = (googleToken) => {
    setUser({ ...user, googleToken, isAuthenticated: true });
  };
  const authenticate = (id, username, token, newUser) => {
    setUser({ ...user, id, username, token, newUser });
    localStorage.setItem('isAuthenticated', true);
  };

  const logOut = () => {
    setUser({
      username: '',
      token: '',
      googleToken: '',
      id: '',
      isAuthenticated: false,
      newUser: null,
    });
  };
  return (
    <UserContext.Provider
      value={{ user, authenticate, addGoogleToken, logOut }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
