import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({ username: "", id: "", token: "",googleToken : "" ,isAuthenticated: false });

  const addGoogleToken = (googleToken) => {
    setUser({ ...user , googleToken , isAuthenticated: true });
  };
  const authenticate = (id , username , token)=>{
      setUser({ ...user , id ,username ,token});
  }

  const logOut = () => {
    setUser({ username: "", token: "", googleToken:"" , id: "", isAuthenticated: false });
  };
  return (
    <UserContext.Provider value={{user, authenticate, addGoogleToken ,logOut}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;