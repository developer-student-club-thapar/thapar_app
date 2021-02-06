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
    localStorage.setItem('userId', id);
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('userToken', token);
  };

  const setStudentData = (data) => {
    console.log(data, 'student');
    const { id, rollno, gender, bio, batch, branch } = data;
    setStudent({ ...student, id, rollno, gender, bio, batch, branch });
  };

  const setStudentRefreshedData = (data) => {
    const { id, rollno, gender, bio, batch, branch, user } = data.getStudent;
    setStudent({ ...student, id, rollno, gender, bio, batch, branch });
    setUser({
      ...user,
      id: user.id,
      username: user.username,
      newUser: false,
      googleToken: getAccessToken(),
      token: localStorage.getItem('userToken'),
      isAuthenticated: true,
    });
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
        setStudentRefreshedData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
