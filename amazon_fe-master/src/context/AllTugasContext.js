import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
const AllTugasContext = createContext();

const AllTugasContextProvider = (props) => {
    const [allTask, setTaskData] = useState([]);
    var axiosInstnce = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
    })
    useEffect(() => {
        TaskData();
    }, [])
    async function TaskData() {
        const AllTask = await axiosInstnce.get('/task-data');
        setTaskData(AllTask.data)
    }
    return (
        <AllTugasContext.Provider value={{ allTask, TaskData }}>
            {props.children}
        </AllTugasContext.Provider>
    )
}

export default AllTugasContext;
export { AllTugasContextProvider }
