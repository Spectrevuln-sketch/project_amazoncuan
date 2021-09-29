import React, { useContext, useState, useEffect } from 'react'
import { TaskListHeader } from '../../../components'
import UserContext from '../../../context/CurrentUserContext';
import axios from 'axios';

const DayReport = () => {
  const { UserData } = useContext(UserContext);
  const [CountTugas, setCountTugas] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })

  useEffect(() => {
    GetCountTugas();
  }, [])


  const GetCountTugas = async () => {
    try {
      const TugasAsUser = await axiosInstnce.get('/get-tugas-user-berhasil');
      if (TugasAsUser.status === 200) {
        setCountTugas(TugasAsUser.data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div data-v-ebf933f6>
      <div data-v-b2cb782a data-v-ebf933f6 className="Site">
        <TaskListHeader mainTitle="Laporan harian" />
        <div data-v-b2cb782a className="mt10 van-grid-item van-cell--borderless" style={{ marginTop: "-10%" }}>
          <i data-v-b2cb782a className="van-icon van-icon-cluster van-cell__left-icon">
            {/**/}
          </i>
          <div data-v-b2cb782a className="van-cell__title">
            <span data-v-b2cb782a style={{ margin: "0 15px", color: "#4087f1", fontWeight: "600", fontSize: "15px", overflow: "hidden" }}>Jumlah</span>
            <div style={{ margin: "0 15px", color: "#4087f1", fontWeight: "600", fontSize: "15px", overflow: "hidden" }}>pendapatan{UserData !== undefined ? 0 : UserData.pendapatan}</div>
          </div>
          <div data-v-b2cb782a className="van-cell__value">
            <span data-v-b2cb782a style={{ fontSize: "15px", position: "relative", margin: "0 15px", wordBreak: "break-word", textAlign: "right" }}>2021/20/8</span>
          </div>
        </div>
        <div data-v-b2cb782a className="MyEarnings van-grid" style={{ paddingLeft: '1px' }}>
          <div data-v-b2cb782a className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px' }}>
            <div className="van-grid-item__content van-grid-item__content--center">
              <div className="van-grid-item__icon-wrapper">
                Tugas selesai dariku(Jumlah)
              </div>
              {CountTugas !== undefined ? CountTugas : 0}
            </div>
          </div>
          <div data-v-b2cb782a className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px' }}>
            <div className="van-grid-item__content van-grid-item__content--center">
              <div className="van-grid-item__icon-wrapper">
                Pendapatan dari tugasku(&nbsp;IDR)
                {/**/}
              </div>
              {UserData.pendapatan}
            </div>
          </div>
          <div data-v-b2cb782a className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
            <div className="van-grid-item__content van-grid-item__content--center">
              <div className="van-grid-item__icon-wrapper">
                Tugas selesai dari bawahan(Jumlah)
                {/**/}
              </div>
              0
            </div>
          </div>
          <div data-v-b2cb782a className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
            <div className="van-grid-item__content van-grid-item__content--center">
              <div className="van-grid-item__icon-wrapper">
                Pendapatan dari tugas bawahan(&nbsp;IDR)
                {/**/}
              </div>
              0
            </div>
          </div>
        </div>
        <div data-v-b2cb782a className="mt10 van-grid-item van-cell--borderless" style={{ marginTop: "-10%" }}>
          <i data-v-b2cb782a className="van-icon van-icon-cluster van-cell__left-icon">
            {/**/}
          </i>
          <div data-v-b2cb782a className="van-cell__title"><span data-v-b2cb782a style={{ margin: "0 15px", color: "#4087f1", fontWeight: "600", fontSize: "15px", overflow: "hidden" }}>Laporan harian</span></div>
          <div data-v-b2cb782a className="van-cell__value"><span data-v-b2cb782a style={{ fontSize: "15px", position: "relative", margin: "0 15px", wordBreak: "break-word", textAlign: "right", overflow: "hidden" }}>30 hari terakhir</span></div>
        </div>
        <table data-v-b2cb782a width="100%" style={{ fontSize: "12px" }}>
          <thead data-v-b2cb782a>
            <tr data-v-b2cb782a>
              <th data-v-b2cb782a>Kuantitas</th>
              <th data-v-b2cb782a>Tugas</th>
              <th data-v-b2cb782a>Bawahan</th>
              <th data-v-b2cb782a>Konsumsi</th>
              <th data-v-b2cb782a>Tanggal</th>
            </tr>
          </thead>
          <tbody data-v-b2cb782a>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/20</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/19</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/18</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/17</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/16</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/15</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/14</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/13</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/12</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/11</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/10</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/09</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/08</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/07</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/06</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/05</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/04</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/03</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/02</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>08/01</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/31</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/30</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/29</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/28</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/27</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/26</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/25</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/24</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/23</td>
            </tr>
            <tr data-v-b2cb782a>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>0</td>
              <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
              <td data-v-b2cb782a>07/22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default DayReport
