
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const AllVipLevel = createContext();

function VipDataProvider(props) {
    const [vipData, setVipData] = useState([]);
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })
    useEffect(() => {
        GetAllVIP()
    }, []);
    async function GetAllVIP() {
        const GetVIP = await api.get('/get-all-vip-data')
        setVipData(GetVIP);
    }

    return (
        <AllVipLevel.Provider value={{ vipData, GetAllVIP }}>
            {props.children}
        </AllVipLevel.Provider>
    );
}

export default AllVipLevel;
export { VipDataProvider };