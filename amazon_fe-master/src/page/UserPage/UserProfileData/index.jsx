import React, { useContext, useEffect, useState } from 'react'
import { FooterNav, MenuOneUser, MenuTwoUser, MyEarnings } from '../../../components/Moleculs';
import { Link, useHistory } from 'react-router-dom';
// icon Atoms
import { IconContext } from "react-icons";
import { RiShutDownLine } from "react-icons/ri";

import './user-profile.css'
// import React Helmet
import { Helmet } from "react-helmet";

import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
import Cookies from 'universal-cookie';
import AuthContext from '../../../context/AuthContext';



const UserProfileData = () => {
  const { getLoggedIn } = useContext(AuthContext)

  const cookie = new Cookies();
  const [Topup, setTopup] = useState([]);
  const [Setatus, setStatus] = useState([]);
  const [Userdata, setUserData] = useState([]);

  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  const alert = useAlert()
  const history = useHistory()

  const ToDompetkuPage = () => {
    window.location.href = '/dompetKu';
  }
  useEffect(() => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session', httpOnly: true });
    UserCurrent(tokenData)
    getTopupdata(tokenData)

  }, [])


  /** Call Topup Data */
  var getTopupdata = (tokenData) => {
    console.log(tokenData)
    axiosInstnce.get('/currentUserPay', {
      params: {
        token: tokenData
      }
    })
      .then(res => {
        console.log(res)
        if (res.data.status === true) {
          var apiData = res.data
          var Status = res.status
          setStatus(Status)
          setTopup(apiData)
        }
      }).catch(err => {
        console.error(err)
      })
  }
  /** End Call Topup Data */



  /* Call User Data */
  const UserCurrent = (tokenData) => {

    axiosInstnce.get('/current_user', {
      params: {

        token: tokenData,
      }
    }).then(res => {
      if (res.data.status === 200) {
        setUserData(res.data.data_user)
      }
    }).catch(err => {
      console.error(err)
    })
  }
  /* End Call User Data */

  /* Logout user */
  const LogoutUser = async (e) => {
    e.preventDefault();
    var tokenData = cookie.get('token', { path: '/', expires: 'session', httpOnly: true });
    await axiosInstnce.get('/logout_auth', {
      params: {
        token: tokenData
      }
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
          getLoggedIn()
          history.push('/');
        }
        if (res.data.status === 500) {
          alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
        }
      }).catch(err => {
        console.error(err)
      })
  }
  /* End Logout user */


  return (
    <div data-v-ebf933f6>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | User Profile</title>
      </Helmet>
      <div data-v-370f2406 data-v-ebf933f6 className="IndexBox Site UserInfo" style={{ background: "transparent" }}>
        {/**/}
        <div data-v-370f2406 className="info van-cell van-cell--borderless" style={{ background: "transparent" }} >
          <img alt="" data-v-370f2406 height={60} className="head" style={{ borderRadius: '100%' }} src="https://serve.bersinar666.com/jeecg-boot/sys/common/static/head/head_1.png," />
          <div data-v-370f2406 className="van-cell__title font-user-small">
            Daftar masuk akun：{Userdata.no_tlp}
            <div data-v-370f2406 className="van-cell__label font-user-small"> Kode undangan：{Userdata.kode_akun} </div>
          </div>
          <div data-v-370f2406 className="van-cell__value" onClick={LogoutUser}>
            <Link data-v-370f2406 to={"#"}>

              <IconContext.Provider value={{ color: "#000", size: "30px" }}>
                <div>
                  <RiShutDownLine />
                </div>
              </IconContext.Provider>


              <p data-v-370f2406 className="font-user-small">Keluar akun</p>
            </Link>
          </div>
        </div>
        <div data-v-370f2406 className="money font-user-small">
          <div data-v-370f2406 id="amazon-bg-silver">
            <div data-v-370f2406 className="money-info">
              <div data-v-370f2406>
                <div data-v-370f2406 className="title">Saldo</div>
                <div data-v-370f2406 className="Number">{Userdata.pendapatan === null || Userdata.pendapatan === undefined ? 0 : Userdata.pendapatan}</div>
              </div>
              <div data-v-370f2406 className="cut">
                <div data-v-370f2406 className="title">
                  Estimasi pendapatan
                </div>
                <div data-v-370f2406 className="Number">0</div>
              </div>
              <div data-v-370f2406>
                <div data-v-370f2406 className="title"> Dana yang dibekukan</div>
                <div data-v-370f2406 className="Number">0</div>
              </div>
              <div data-v-370f2406 className="wallet-box">
                <button data-v-370f2406 className="van-button van-button--info van-button--mini" onClick={ToDompetkuPage}>
                  <div data-v-370f2406 className="van-button__content">
                    <span data-v-370f2406 className="van-button__text">Dompetku</span>
                  </div>
                </button>
              </div>
            </div>
            <div data-v-370f2406 className="sign">
              <img alt="" data-v-370f2406 src="assets/images/amazon.jpg" style={{ width: "100%" }} alt="" /></div>
          </div>
        </div>
        <MyEarnings />
        <MenuOneUser />
        <MenuTwoUser />
        {/*Footer Nav*/}
        <FooterNav />
      </div>
    </div>



  )
}

export default UserProfileData
