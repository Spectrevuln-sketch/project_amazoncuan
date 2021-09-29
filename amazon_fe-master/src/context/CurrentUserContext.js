
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const UserContext = createContext();

function CurrentUserContextProvider(props) {
  const [UserData, setUserData] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  })

  useEffect(() => {
    getCurrentUser()
  }, []);

  async function getCurrentUser() {
    const CurrentDataUser = await axiosInstnce.get('/current_user', {
    })
    setUserData(CurrentDataUser.data.data_user);
  }

  return (
    <UserContext.Provider value={{ UserData, getCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { CurrentUserContextProvider };