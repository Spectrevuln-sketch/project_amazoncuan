
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const GetAllVipCardContext = createContext();

function GetAllVipCardContextProvider(props) {
    const [VipData, setVipData] = useState([]);
    var axiosInstnce = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })

    useEffect(() => {
        setTimeout(() => {
            GetAllVipData()
        }, 1000)
    }, []);

    async function GetAllVipData() {
        const AllVipData = await axiosInstnce.get('/get-all-vip-level', {
        })
        setVipData(AllVipData.data);
    }

    return (
        <GetAllVipCardContext.Provider value={{ VipData, GetAllVipData }}>
            {props.children}
        </GetAllVipCardContext.Provider>
    );
}

export default GetAllVipCardContext;
export { GetAllVipCardContextProvider };