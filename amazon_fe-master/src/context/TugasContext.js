import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
const TugasContext = createContext();
const TugasContextProvider = (props) => {
    const [vendor, setVendor] = useState([]);
    var axiosInstnce = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    useEffect(() => {
        GetAllVendor();
    }, [])
    const GetAllVendor = async () => {
        try {
            const DataVendor = await axiosInstnce.get('/all-vendor-data');
            console.log(DataVendor)
            if (DataVendor.status === 200) {
                setVendor(DataVendor.data);
            }
        } catch (err) {
            console.error(err)
        }

    }
    return (
        <TugasContext.Provider value={{ vendor, GetAllVendor }}>
            {props.children}
        </TugasContext.Provider>
    )
}

export default TugasContext
export { TugasContextProvider }
