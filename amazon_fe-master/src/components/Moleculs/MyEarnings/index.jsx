import React, { useState, useEffect } from 'react'

import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
import './amazon-myearnings.css'
const MyEarnings = () => {
  const [Topup, setTopup] = useState([]);
  const [Userdata, setUserData] = useState([]);
  const [CountTugas, setCountTugas] = useState([]);
  const [CountTugasGagal, setCountTugasGagal] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  useEffect(() => {

    UserCurrent()
    getTopupdata()
    GetCountTugas();
    GetCountTugasGagal();
  }, [])

  const GetCountTugas = async () => {
    try {
      const TugasAsUser = await axiosInstnce.get('/get-tugas-user-berhasil');
      if (TugasAsUser.status === 200) {
        if (TugasAsUser.data.length > 0) {

          setCountTugas(TugasAsUser);
        }
      }
    } catch (err) {
      if (err) {
        console.log(err)
      }
    }
  }

  const GetCountTugasGagal = async () => {
    try {
      const TugasGagal = await axiosInstnce.get('/get-tugas-user-gagal');
      if (TugasGagal.status === 200) {
        if (TugasGagal.data.length > 0) {
          setCountTugasGagal(TugasGagal);
        }
      }
    } catch (err) {
      if (err) {
        console.log(err)
      }
    }
  }
  console.log(CountTugas)




  /** Call Topup Data */
  var getTopupdata = () => {
    axiosInstnce.get('/currentUserPay')
      .then(res => {
        var apiData = res.data
        setTopup(apiData)
      }).catch(err => {
        console.error(err)
      })
  }
  /** End Call Topup Data */


  /* Call User Data */
  const UserCurrent = () => {
    axiosInstnce.get('/current_user')
      .then(res => {
        setUserData(res.data.data_user)
        if (res.data.status === 200) {
        }
      }).catch(err => {
        console.error(err)
      })
  }
  /* End Call User Data */

  return (


    <div data-v-370f2406 className="MyEarnings van-grid" style={{ paddingLeft: '1px' }}>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Saldo pribadi(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Math.floor(Userdata.pendapatan + Userdata.saldo_topup)}</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Pendapatan hari ini(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Userdata.pendapatan}</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Komisi hari ini(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text"> 0</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Rabat hari ini(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">0</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Pendapatan kemarin(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">0</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Pendapatan minggu ini(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Userdata.pendapatan} </div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Pendapatan bulan ini(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Userdata.pendapatan} </div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Pendapatan bulan lalu(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text"> 0</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Jumlah pendapatan(&nbsp;IDR)
            {/**/}
          </div>
          <div data-v-370f2406 className="MyEarnings_text">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Userdata.pendapatan}</div>
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flex: '1 1 0%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Jumlah tugas selesai hari ini
            {/**/}
          </div>
          {CountTugas.length !== 0 && (

            <div data-v-370f2406 className="MyEarnings_text">{CountTugas.data.length}</div>
          )}
          {CountTugas.length === 0 && (

            <div data-v-370f2406 className="MyEarnings_text">{CountTugas.length}</div>
          )}
        </div>
      </div>
      <div data-v-370f2406 className="van-grid-item" style={{ flex: '1 1 0%', paddingRight: '1px', marginTop: '1px' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper">
            Jumlah tugas belum selesai hari ini
            {/**/}
          </div>
          {CountTugasGagal.length !== 0 && (

            <div data-v-370f2406 className="MyEarnings_text">{CountTugasGagal.data.length}</div>
          )}
          {CountTugasGagal.length === 0 && (

            <div data-v-370f2406 className="MyEarnings_text">{CountTugasGagal.length}</div>
          )}
        </div>
      </div>
    </div>

  )
}

export default MyEarnings
