import React, { useState, createContext } from 'react';
import { getAccessToken, setAccessToken } from '../util/token';
import jwtDecode from 'jwt-decode';
// import {getApiUrl} from  '../util/url'

const query = `mutation {
  refreshToken(refreshToken: "0f1453d7ad2f7762fa351236a9c0bae994fb29bf") {
    token
  }
}`;

try {
  const { exp } = jwtDecode(getAccessToken());
  if (Date.now() >= exp * 1000 || getAccessToken() === '') {
    fetch('http://localhost:8000/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((r) => r.json())
      .then((data) => setAccessToken(data.data.refreshToken.token));
  }
} catch (err) {
  console.log(err);
}
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

  if (!user.token) {
    user.token = getAccessToken();
  }

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
