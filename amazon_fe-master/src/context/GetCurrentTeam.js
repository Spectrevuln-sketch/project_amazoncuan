import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const CurrentTeamContext = createContext();

function CurrentTeamContextProvider(props) {
    const [CurrentTeam, setCurrentTeam] = useState(undefined);
    var axiosInstnce = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })
    useEffect(() => {
        getCurrentTeam()
    }, []);

    async function getCurrentTeam() {
        const current_team = await axiosInstnce.get(
            "/team-data"
        );
        setCurrentTeam(current_team.data);
    }

    return (
        <CurrentTeamContext.Provider value={{ CurrentTeam, getCurrentTeam }}>
            {props.children}
        </CurrentTeamContext.Provider>
    );
}

export default CurrentTeamContext;
export { CurrentTeamContextProvider };