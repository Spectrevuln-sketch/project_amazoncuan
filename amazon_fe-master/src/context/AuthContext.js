
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  })
  useEffect(() => {
    getLoggedIn()
  }, []);

  async function getLoggedIn() {
    const loggedInRes = await axiosInstnce.get(
      "/isLogin"
    );
    setLoggedIn(loggedInRes.data);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };