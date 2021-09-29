
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const CurrentAdmin = createContext();

function MyDataProvider(props) {
    const [adminData, setAdminData] = useState([]);
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })
    useEffect(() => {
        GetMyData()
    }, []);
    async function GetMyData() {
        const GetMyData = await api.get('/current_admin')
        setAdminData(GetMyData);
    }

    return (
        <CurrentAdmin.Provider value={{ adminData, GetMyData }}>
            {props.children}
        </CurrentAdmin.Provider>
    );
}

export default CurrentAdmin;
export { MyDataProvider };