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

  const [student, setStudent] = useState({
    id: '',
    branch: null,
    batch: null,
    gender: '',
    rollno: '',
    bio: '',
  });

  const addGoogleToken = (googleToken) => {
    setUser({ ...user, googleToken, isAuthenticated: true });
    localStorage.setItem('accessToken', googleToken);
  };
  const authenticate = (id, username, token, newUser) => {
    setUser({ ...user, id, username, token, newUser });
    localStorage.setItem('isAuthenticated', true);
  };

  const setStudentData = (data) => {
    const { id, rollno, gender, bio, batch, branch } = data;
    setStudent({ ...student, id, rollno, gender, bio, batch, branch });
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
      value={{
        user,
        authenticate,
        addGoogleToken,
        logOut,
        student,
        setStudentData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
