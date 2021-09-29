import React, { useEffect, useState } from 'react'
import { TaskListHeader, TaskContent } from '../../../components/Moleculs';
import axios from 'axios';
// import React Helmet
import { Helmet } from "react-helmet";
const TaskList = () => {
  const [AllTaskData, setAllTaskData] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Task List</title>
      </Helmet>
      <div data-v-24948ec7="" className="task-list Site IndexBox">
        <TaskListHeader mainTitle="Daftar Tugas" />
        <div data-v-24948ec7="" className="van-pull-refresh">
          <div className="van-pull-refresh__track" style={{ transitionDuration: "0ms" }}>
            <div className="van-pull-refresh__head"></div>
            <div data-v-24948ec7="" role="feed" className="van-list">
              {/* Task Content */}
              <TaskContent />

              <div className="van-list__placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList
