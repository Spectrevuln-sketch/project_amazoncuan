import React, { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import { FooterNav, TaskListHeader, NonTask, FacoFileUploadTask, NonTaskOri, ContentLoading } from '../../../components'
/* Additional Package */
import Rmoment from 'react-moment';
import axios from "axios";
import copy from "copy-to-clipboard";
import { useAlert } from 'react-alert'
/* End Additional Package */


/* Css Import */
import './my-task.css';
const MyTask = () => {
  const [taskData, setTaskData] = useState([])
  const [NotDone, setDone] = useState([])
  const [hidden, setHidden] = useState(false)
  const [tab, setTab] = useState(false)
  const [copyText, setCopyText] = useState('');
  const [copyLink, setCopyLink] = useState('');
  const alert = useAlert();

  const ActiveTab = (props) => {
    setTab(props)
    setHidden(true)
  }

  const history = useHistory()


  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  const CopyLink = (link) => {
    if (tab === false) {
      copy(link.url_task);
      alert.success(`You have copied`);
    }
    if (tab === 3) {
      copy(link.url_task);
      alert.success(`You have copied`);
    }
  }

  useEffect(() => {
    GetMyTaskProcess()
    setHidden(true)
  }, [])

  const GetMyTaskProcess = () => {
    axiosInstnce.get('/get_my_task')
      .then(res => {
        if (res.data.status === 200) {
          var MyTaskData = res.data.data
          setTaskData(res.data.data)
          // MyTaskData.map(tugas => {
          //   if (tugas.image_file === null) {
          //     console.log(tugas.image_file)
          //     setDone(tugas.image_file)
          //   }
          // })
        }
      }).catch(err => {
        console.log(err)
      })
  }
  /* Task Data For Tab 1 */
  const MyTaskData = () => {
    if (taskData) {
      setTimeout(() => {
        return <ContentLoading />
      }, 3000)

      return taskData.map(task => {
        if (task.task_status === null) {
          if (task.image_file === null && tab === false) {

            setHidden(true);
            return (
              <div data-v-65641047 className="taskList" style={{ fontSize: "12px" }}>
                <div data-v-65641047 className="icon">
                  <img style={{ marginRight: "10px" }} data-v-65641047 src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126723265.png" alt="" />
                </div>
                <div data-v-65641047 className="content">
                  <span data-v-65641047 onClick={() => history.push('/taskShow')}>
                    <h4 data-v-65641047 style={{ wordBreak: 'break-all', fontSize: "12px", color: "black" }}>
                      YouTube：Suka berlangganan dan teruskan，Anda perlu mengunggah tangkapan layar
                    </h4>
                    <p data-v-65641047 className="info">
                      Membuat：<Rmoment format="DD/MM/YYYY hh:mm:ss">{task.createdAt}</Rmoment>
                    </p>
                    <p data-v-65641047 className="info">
                      Verifikasi：
                    </p>
                  </span>
                  <p data-v-65641047 className="info">
                    <Link data-v-65641047 to="https://www.youtube.com/watch?v=nhI0bhGGFQs" target="_blank" className="info link" style={{ fontSize: "12px" }}>Buka tautan</Link>
                    <span data-v-65641047>|</span>
                    <Link data-v-65641047 className="info link" style={{ fontSize: "12px" }} onClick={() => CopyLink(task)}>Salin tautan</Link>
                  </p>
                </div>
                <div data-v-65641047 className="state">
                  <div data-v-65641047>
                    <p data-v-65641047 className="info">Harga</p>
                    <h4 style={{ fontSize: "18px", fontWeight: "600" }} data-v-65641047>&nbsp;IDR {task.cost_task === null ? 0 : task.cost_task}</h4>
                  </div>
                  <FacoFileUploadTask taskCode={task.unique_code} timeCreated={task.createdAt} value={{ color: "#bbb", size: "50px" }} style={{ height: "40px", width: "40px" }} />
                </div>
              </div>
            )
          } else {
            return <NonTaskOri />
          }
        } else {
          setHidden(false)
        }
      })
    } else {
      setHidden(false)
    }
  }
  /* End Task Data For Tab 1 */

  /* Task Data For Tab 3 */
  const ProcessedTask = () => {
    if (taskData) {
      setTimeout(() => {
        return <ContentLoading />
      }, 3000)
      return taskData.map(task => {
        if (tab === 3) {
          if (task.task_status === 'BERHASIL') {

            setHidden(true)
            return (
              <>
                <div style={{ fontSize: "12px" }} data-v-65641047 className="taskList">
                  <div data-v-65641047 className="icon">
                    <img data-v-65641047 src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126723265.png" alt="" style={{ marginRight: "10px" }} />
                  </div>
                  <div data-v-65641047 className="content">
                    <span data-v-65641047 onClick={() => history.push('/TaskShow')}>
                      <h4 data-v-65641047 style={{ wordBreak: 'break-all', fontSize: "12px", color: "black" }}>
                        YouTube：Suka berlangganan dan teruskan，Anda perlu mengunggah tangkapan layar
                      </h4>
                      <p data-v-65641047 className="info">
                        Membuat：<Rmoment format="DD/MM/YYYY hh:mm:ss">{task.createdAt}</Rmoment>
                      </p>
                      <p data-v-65641047 className="info">
                        Verifikasi：
                      </p>
                    </span>
                    <p data-v-65641047 className="info">
                      <Link data-v-65641047 href="https://www.youtube.com/watch?v=t2ENoJAF210" target="_blank" className="info link" style={{ fontSize: "12px" }}>Buka tautan</Link>
                      <span data-v-65641047>|</span>
                      <Link data-v-65641047 className="info link" style={{ fontSize: "12px" }} onClick={() => CopyLink(task)}>Salin tautan</Link>
                    </p>
                  </div>
                  <div data-v-65641047 className="state">
                    <div data-v-65641047 id="data-harga">
                      <p data-v-65641047 className="info">Harga</p>
                      <h4 data-v-65641047 style={{ fontSize: "18px" }}>&nbsp;IDR {task.cost_task ? task.cost_task : 0}</h4>
                    </div>
                  </div>
                </div>
              </>
            )
          } else {
            setHidden(false)
          }
        } else {
          setHidden(false)
        }
      })
    } else {
      setHidden(false)
    }
  }
  /* End Task Data For Tab 3 */

  /* Task Data For Tab 4 */
  const TaskGagal = () => {
    if (taskData) {
      setTimeout(() => {
        return <ContentLoading />
      }, 3000)
      if (tab === 4) {
        return taskData.map(task => {
          if (task.task_status === 'GAGAL') {
            return (
              <>
                <div style={{ fontSize: "12px" }} data-v-65641047 className="taskList">
                  <div data-v-65641047 className="icon">
                    <img data-v-65641047 src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126723265.png" alt="" style={{ marginRight: "10px" }} />
                  </div>
                  <div data-v-65641047 className="content" onClick={() => history.push('/TaskShow')}>
                    <span data-v-65641047>
                      <h4 data-v-65641047 style={{ wordBreak: 'break-all', fontSize: "12px", color: "black" }}>
                        YouTube：Suka berlangganan dan teruskan，Anda perlu mengunggah tangkapan layar
                      </h4>
                      <p data-v-65641047 className="info">
                        Membuat：<Rmoment format="DD/MM/YYYY hh:mm:ss">{task.createdAt}</Rmoment>
                      </p>
                      <p data-v-65641047 className="info">
                        Verifikasi：
                      </p>
                    </span>
                    <p data-v-65641047 className="info">
                      <Link data-v-65641047 href="https://www.youtube.com/watch?v=t2ENoJAF210" target="_blank" className="info link" style={{ fontSize: "12px" }} onClick={() => history.push('/TaskShow')}>Buka tautan</Link>
                      <span data-v-65641047>|</span>
                      <Link data-v-65641047 className="info link" style={{ fontSize: "12px" }}>Salin tautan</Link>
                    </p>
                  </div>
                  <div data-v-65641047 className="state">
                    <div data-v-65641047 id="data-harga">
                      <p data-v-65641047 className="info">Harga</p>
                      <h4 data-v-65641047 style={{ fontSize: "18px" }}>&nbsp;IDR {task.cost_task ? task.cost_task : 0}</h4>
                    </div>
                  </div>
                </div>
              </>
            )
          } else {
            return <NonTaskOri />
          }
        })
      } else {
        return <NonTaskOri />
      }
    } else {
      return <NonTaskOri />
    }
  }
  /* End Task Data For Tab 4 */


  const MultiTab = () => {
    return (
      <div role="tablist" className="van-tabs__nav van-tabs__nav--line van-tabs__nav--complete">
        <div onClick={() => { ActiveTab(false) }} role="tab" className={tab === false ? "van-tab van-tab--active" : 'van-tab'} aria-selected="true"><span className="van-tab__text">Dalam pengolahan</span></div>
        <div onClick={() => { ActiveTab(2) }} role="tab" className={tab === 2 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">Dalam verifikasi</span></div>
        <div role="tab" onClick={() => { ActiveTab(3) }} className={tab === 3 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">Berhasil</span></div>
        <div role="tab" onClick={() => { ActiveTab(4) }} className={tab === 4 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">Gagal</span></div>
        <div role="tab" onClick={() => { ActiveTab(5) }} className={tab === 5 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">Rusak</span></div>
        <div role="tab" onClick={() => { ActiveTab(6) }} className={tab === 6 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">Telah ditinggalkan</span></div>

        <div className="van-tabs__line" style={tab === 1 ? { transform: 'translateX(70.5px) translateX(-50%)', transitionDuration: '1s' } : tab === 2 ? { transform: 'translateX(240.5px) translateX(-50%)', transitionDuration: '1s' } : tab === 3 ? { transform: 'translateX(365.5px) translateX(-50%)', transitionDuration: '1s' } : tab === 4 ? { transform: 'translateX(455.5px) translateX(-50%)', transitionDuration: '1s' } : tab === 5 ? { transform: 'translateX(530.5px) translateX(-50%)', transitionDuration: '1s' } : tab === 6 ? { transform: 'translateX(660.5px) translateX(-50%)', transitionDuration: '1s' } : { transform: 'translateX(70.5px) translateX(-50%)', transitionDuration: '1s' }} />
      </div>
    )
  }

  return (
    <div data-v-65641047 className="IndexBox Site">
      <FooterNav />
      <TaskListHeader mainTitle="Daftar Tugas" />
      <div data-v-65641047>
        <div data-v-65641047 className="tabbar">
          <div data-v-65641047 className="van-tabs van-tabs--line">
            <div className="van-tabs__wrap van-tabs__wrap--scrollable">
              <MultiTab />
            </div>
            <div className="van-tabs__content">

            </div>
          </div>
        </div>
        <div data-v-65641047 className="van-pull-refresh">
          <div className="van-pull-refresh__track" style={{ transitionDuration: '0ms' }}>
            <div className="van-pull-refresh__head" />
            {/* Task Data Here */}
            {tab === false && hidden === false ? <NonTask nonShow={hidden} menu={tab} task={taskData} noDone={NotDone} /> : ''}
            {taskData.length > 0 && tab === false ? <MyTaskData /> : taskData.length > 0 && tab === 3 ? <ProcessedTask /> : tab !== 3 || tab !== false ? <NonTask nonShow={hidden} menu={tab} task={taskData} noDone={NotDone} /> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTask
