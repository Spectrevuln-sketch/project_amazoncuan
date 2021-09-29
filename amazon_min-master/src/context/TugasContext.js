
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const TugasContext = createContext();

function TugasContextProvider(props) {
    const [AllTugas, setAllTugas] = useState([]);
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })
    useEffect(() => {
        GetAllTugas()
    }, []);
    async function GetAllTugas() {
        const GetTugas = await api.get('/daftar-tugas')
        setAllTugas(GetTugas.data);
    }

    return (
        <TugasContext.Provider value={{ AllTugas, GetAllTugas }}>
            {props.children}
        </TugasContext.Provider>
    );
}

export default TugasContext;
export { TugasContextProvider };