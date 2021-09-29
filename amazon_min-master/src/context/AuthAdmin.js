
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const AuthAdmin = createContext();

function AuthAdminProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  })
  useEffect(() => {
    getLoggedIn()
  }, []);

  async function getLoggedIn() {
    const loggedInRes = await api.get(
      "/isLogin"
    );
    setLoggedIn(loggedInRes.data);
  }

  return (
    <AuthAdmin.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthAdmin.Provider>
  );
}

export default AuthAdmin;
export { AuthAdminProvider };