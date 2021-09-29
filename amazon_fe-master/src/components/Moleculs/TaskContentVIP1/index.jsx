import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

/* Additional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
/* End Additional Package */
const TaskContentVIP1 = () => {
  var history = useHistory();
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()

  /* Task VIP1 */
  const TakeTask = () => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session' });
    axiosInstnce.post('/addNewTask', {
      task_count: 1,
      token: tokenData
    }).then(res => {
      if (res.data.total_task.total_amount > 3) {
        alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Pengambilan Task Hari Ini Telah Melebihi Batas Kali</div>);
      } else {
        InsertTaskData();
      }
    }).catch(err => {
      console.error(err)
    })
  }


  const InsertTaskData = () => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session' });
    var CodeTask = document.getElementsByClassName('code-task');
    axiosInstnce.post('/insertTask', {
      task_count: 1,
      token: tokenData,
      code_task: parseInt(CodeTask[0].innerHTML)
    }).then(res => {
      alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>);
    }).catch(err => {
      console.log(err)
      alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Error : {err.message}</div>);
    })
  }
  /* Task VIP0 */


  return (
    <div data-v-24948ec7 className="task-content">
      <img data-v-24948ec7 src="/static/img/no_data.7d5de33.png" style={{
        display: "none", margin: "20px auto"
      }} alt="" />
      <div data-v-24948ec7 className="taskItem">
        <div data-v-24948ec7 className="icon">
          <h4 data-v-24948ec7 className="font-task-list">YouTube</h4>
          <Link data-v-24948ec7 to="#">
            <div data-v-24948ec7 className="van-image" style={{ height: "80%" }}>
              <img src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126723265.png"
                className="van-image__img" style={{ objectFit: "contain" }} alt="" />
            </div>
          </Link>
          <div data-v-24948ec7 className="btn font-task-list" style={{ padding: "0 2px" }}>
            VIP0
          </div>
        </div>
        <div data-v-24948ec7 className="task_title">
          <div data-v-24948ec7 className="task_title_info">
            <ul data-v-24948ec7 style={{ margin: "0 0 0 -20px" }}>
              <li data-v-24948ec7 className="font-task-list">
                <div data-v-24948ec7 style={{ width: "60%", wordBreak: "break-all" }}>Permintaan: ****3262</div>
                <div data-v-24948ec7>
                  <span data-v-24948ec7 style={{ color: "rgb(241, 199, 13)", fontSize: "14px" }}>
                    Sudah dibayar</span>
                </div>
              </li>
              <li data-v-24948ec7 className="font-task-list">
                <div data-v-24948ec7 className="font-task-list">
                  Baki:
                  <span data-v-24948ec7 style={{
                    color: "rgb(64, 135, 241)", fontWeight: "600", width: "80%"
                  }}> 9628</span>
                </div>
                <div data-v-24948ec7 className="font-task-list">
                  &nbsp;IDR
                  <span data-v-24948ec7 style={{
                    color: "rgb(64, 135, 241)", fontSize: "16px", fontWeight: "600"
                  }}> 3600</span>
                </div>
              </li>
              <li data-v-24948ec7>
                <div data-v-24948ec7 style={{ wordBreak: "break-all", width: "80%", fontSize: "12px" }}>Permintaan:Suka
                  berlangganan dan
                  teruskan，Anda perlu mengunggah tangkapan layar</div>
                <Link to="#" data-v-24948ec7 className="btn" style={{ marginLeft: "20px" }} onClick={TakeTask}>
                  Menerima
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskContentVIP1
