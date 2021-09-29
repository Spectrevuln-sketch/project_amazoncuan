import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './task-content-list.css';

/* Additional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
import UserContext from '../../../context/CurrentUserContext';
import TugasContext from '../../../context/TugasContext';
/* End Additional Package */
const TaskContent = () => {
  const history = useHistory();
  const { UserData } = useContext(UserContext);
  const { vendor } = useContext(TugasContext);
  const [allTask, setCurrentTask] = useState([]);
  const { id } = useParams();
  const alert = useAlert()
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  useEffect(() => {
    CheckVIP();
  }, [])



  const CheckVIP = async () => {
    try {
      const CheckTask = await axiosInstnce.get(`/get-tugas-as-vip/${id}`)
      if (CheckTask.status === 200) {
        setCurrentTask(CheckTask.data);
      }

    } catch (err) {
      if (err.response.status === 404) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>);
      }
      if (err.response.status === 405) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>);
        await history.push('/')
      }
    }

  }





  /* Task VIP0 */
  const TakeTask = async (props) => {
    /* Add CheckDate After Admin Can Create Task */
    // const CheckDate = Moment().isAfter(new Date(), 'days')
    await axiosInstnce.post('/addNewTask', {
      task_count: 1,
    }).then(res => {
      if (res.data.total.length > 0) {
        for (let i = 0; i < res.data.total.length; i++) {
          const val = res.data.total[i];
          if (val.total_amount !== null || val.total_amount !== undefined) {
            if (val.total_amount > props) {
              alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Pengambilan Task Hari Ini Telah Melebihi Batas Kali</div>);
            } else {
              InsertTaskData();
            }
          }
        }
      } else {
        InsertTaskData();
      }
    }).catch(err => {
      alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.message}</div>);
    })
  }

  const InsertTaskData = async () => {
    var CodeTask = document.getElementsByClassName('code-task');
    await axiosInstnce.post('/insertTask', {
      task_count: 1,
      code_task: parseInt(CodeTask[0].innerHTML)
    }).then(res => {
      alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>);
    }).catch(err => {
      alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Error : {err.message}</div>);
    })
  }
  /* Task VIP0 */

  return (
    <div data-v-24948ec7 className="task-content">
      <img data-v-24948ec7 src="/static/img/no_data.7d5de33.png" style={{
        display: "none", margin: "20px auto"
      }} alt="" />
      {allTask.length > 0 && (
        allTask.map(task => {

          return (

            <div data-v-24948ec7 className="taskItem">
              <div data-v-24948ec7 className="icon">
                <h4 data-v-24948ec7 className="font-task-list">{task.daftar_tuga.title_kategori}</h4>
                <Link data-v-24948ec7 to="#">
                  <div data-v-24948ec7 className="van-image" style={{ height: "80%" }}>
                    <img src={"assets/taskupload/" + task.daftar_tuga.image_ketegori}
                      className="van-image__img" style={{ objectFit: "contain" }} alt="" />
                  </div>
                </Link>
                <div data-v-24948ec7 className="btn font-task-list" style={{ padding: "0 2px" }}>
                  {task.vip_list.vip_name}
                </div>
              </div>
              <div data-v-24948ec7 className="task_title">
                <div data-v-24948ec7 className="task_title_info">
                  <ul data-v-24948ec7 style={{ margin: "0 0 0 -20px" }}>
                    <li data-v-24948ec7 className="font-task-list">
                      <div data-v-24948ec7 style={{ width: "60%", wordBreak: "break-all" }}>Permintaan: <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{task.no_tlp_pedagang.length > 6 ? "****" + task.no_tlp_pedagang.substring(3, 7) : task.no_tlp_pedagang}</span></div>
                      <div data-v-24948ec7>
                        <span data-v-24948ec7 style={{ color: "white", fontSize: "14px" }}>
                          Sudah dibayar</span>
                      </div>
                    </li>
                    <li data-v-24948ec7 className="font-task-list">
                      <div data-v-24948ec7 className="font-task-list">
                        Baki:
                        <span data-v-24948ec7 className="code-task" style={{
                          color: "rgb(64, 135, 241)", fontWeight: "600", width: "80%"
                        }}>{task.unique_code}</span>
                      </div>
                      <div data-v-24948ec7 className="font-task-list">
                        &nbsp;IDR
                        <span data-v-24948ec7 style={{
                          color: "rgb(64, 135, 241)", fontSize: "16px", fontWeight: "600"
                        }}> {UserData.pendapatan === null || UserData.pendapatan === undefined ? 0 : UserData.pendapatan}</span>
                      </div>
                    </li>
                    <li data-v-24948ec7>
                      <div data-v-24948ec7 style={{ wordBreak: "break-all", width: "80%", fontSize: "12px" }}>Permintaan:{task.misi_tugas.length > 20 ? task.misi_tugas.substring(0, 20) : task.misi_tugas}</div>
                      <Link to="#" data-v-24948ec7 className="btn" style={{ marginLeft: "20px" }} onClick={() => TakeTask(task.vip_list.tugas_per_hari)}>
                        Menerima
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default TaskContent
