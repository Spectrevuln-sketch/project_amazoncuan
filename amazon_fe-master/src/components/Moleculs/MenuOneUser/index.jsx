import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// icon Atoms
import { IconContext } from "react-icons";
import { FaTasks, FaUserEdit, FaRegCreditCard } from "react-icons/fa";
import { HiOutlineDocumentDownload, HiOutlineDocumentDuplicate, HiOutlineChat } from "react-icons/hi";
/* Aditional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
/* End Aditional Package */

const MenuOneUser = () => {
  const [Topup, setTopup] = useState([]);
  const [Userdata, setUserData] = useState([]);
  const [CountTugas, setCountTugas] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })



  useEffect(() => {
    UserCurrent()
    getTopupdata()
    GetCountTugas();
  }, [])



  const GetCountTugas = async () => {
    try {
      const TugasAsUser = await axiosInstnce.get('/get-tugas-user-berhasil');
      if (TugasAsUser.status === 200) {
        setCountTugas(TugasAsUser);
      }
    } catch (err) {
      if (err) {
        console.log(err)
      }
    }
  }

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
    <div className="van-grid" style={{ margin: "10px 0" }}>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <Link to={"/myTask"}>

            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FaTasks />
              </div>
            </IconContext.Provider>

          </Link>
          <span className="van-grid-item__text" style={{ color: "#000", fontSize: "12px" }}>Rekor tugas</span>
        </div>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <Link to={"/PostRecord"}>

            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <HiOutlineDocumentDownload />
              </div>
            </IconContext.Provider>

          </Link>
          <span className="van-grid-item__text" style={{ color: "#000", fontSize: "12px" }}>Manajemen rilis</span>
        </div>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%' }}>
        <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
          <Link to={"/ManajementAssisten"}>
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <HiOutlineDocumentDuplicate />
              </div>
            </IconContext.Provider>
          </Link>
          <span className="van-grid-item__text" style={{ color: "#000", fontSize: "12px" }}>Asisten tugas</span>
        </div>
      </div>
    </div>

  )
}

export default MenuOneUser;
