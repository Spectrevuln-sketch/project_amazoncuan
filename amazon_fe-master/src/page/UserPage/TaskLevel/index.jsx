import React from 'react'
import { Link } from 'react-router-dom'
import { BannerSlider, FooterNav, TaskLevelNavbar, TaskLevelContent } from '../../../components/Moleculs';
import './task-level.css';
// import React Helmet
import { Helmet } from "react-helmet";
const TaskLevel = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Task Level</title>
      </Helmet>
      <div data-v-9b593c8e className="IndexBox Site font-task-small">
        <FooterNav />
        <BannerSlider />
        <div data-v-9b593c8e className="van-tabs van-tabs--line">
          <TaskLevelNavbar />
          <TaskLevelContent />
        </div>
        <div data-v-9b593c8e className="mask" style={{ display: "none" }}></div>
      </div>
    </div>
  )
}

export default TaskLevel
