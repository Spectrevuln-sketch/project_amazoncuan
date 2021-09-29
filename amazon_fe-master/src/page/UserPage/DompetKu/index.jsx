import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Components
import { TypePembayaranNavHeader } from '../../../components/Moleculs'
// import css
import './mywallet-style.css';
// import React Helmet
import { Helmet } from "react-helmet";
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
import Cookies from 'universal-cookie';
const DompetKu = () => {
  const cookie = new Cookies();
  var [Userdata, setUserData] = useState([])
  var [Topup, setTopup] = useState([]);
  var [Status, setStatus] = useState([]);

  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  const alert = useAlert()



  useEffect(() => {
    UserCurrent()
    getTopupdata()
  }, [])


  /** Call Topup Data */
  var getTopupdata = () => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session' });
    axiosInstnce.get('/currentUserPay', {
      params: {
        token: tokenData
      }
    })
      .then(res => {
        var apiData = res.data.result
        var status = res.data.status
        setStatus(status)
        setTopup(apiData)
      }).catch(err => {
        console.error(err)
      })
  }
  /** End Call Topup Data */

  /* Call User Data */
  const UserCurrent = () => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session' });
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



  var NoneData = () => {
    return (
      <div data-v-428b4004 role="feed" className="van-list">
        <img data-v-428b4004 src="assets/images/no_data.7d5de33.png" style={{ display: 'block', margin: '20px auto' }} alt="" />
        <div className="van-list__finished-text">Tidak ada data</div>
        <div className="van-list__placeholder" />
      </div>
    )
  }

  var ShowData = () => {
    return Topup.map(userTopup => {
      console.log(userTopup)
      return (
        <div data-v-428b4004 role="feed" className="van-list" >
          <div data-v-428b4004 className="container-content" >
            <div data-v-428b4004 className="van-cell">
              <div data-v-428b4004 className="van-cell__title">

                <div data-v-428b4004 className="item-content">
                  <div data-v-428b4004 className="icon"><span data-v-428b4004>{userTopup.status_payment === "UNPAID" ? 'T' : 'P'}</span></div>
                  {/**/}
                  <div data-v-428b4004 style={{ width: '100%' }}>
                    <div data-v-428b4004 className="item-content_date"><span data-v-428b4004 >{userTopup.merchant_ref}</span><span data-v-428b4004 style={{ margin: "0 0 0 -50em" }}>{Moment(userTopup.updatedAt).format('DD-MM-YYYY')}</span></div>
                    <div data-v-428b4004 className="item-content_money">
                      <NumberFormat data-v-428b4004 className="text-money" value={userTopup.topup_cost} displayType={'number'} thousandSeparator={true} prefix={'Rp.'} /><span data-v-428b4004 style={{ margin: "0 0 0 -48em" }}>{userTopup.status_payment === "UNPAID" ? 'Dalam proses pengolahan' : userTopup.status_payment === "PAID" ? 'Selesai' : 'Pending'}</span> {/**/} {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }




  return (
    <div data-v-ebf933f6>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Dompetku</title>
      </Helmet>
      <div data-v-428b4004 data-v-ebf933f6 className="Site walletContent">
        <TypePembayaranNavHeader title="DompetKu" />
        <div data-v-428b4004 className="PageBox">
          <div data-v-428b4004 className="ScrollBox Wallet">
            {/* Balance */}
            <div data-v-428b4004 className="balance">{Userdata.pendapatan == null || Userdata.pendapatan == undefined ? 0 : Userdata.pendapatan}</div>
            <div data-v-428b4004 className="tool">
              <ul data-v-428b4004>
                <li data-v-428b4004>
                  <Link to="/typePembayaran">
                    Isi ulang
                  </Link>
                </li>
                <li data-v-428b4004>
                  <Link to="/EditUser">
                    Penarikan
                  </Link>
                </li>
              </ul>
            </div>
            <div data-v-428b4004 className="van-tabs van-tabs--line">
              <div className="van-tabs__wrap">
                <div role="tablist" className="van-tabs__nav van-tabs__nav--line">
                  <div role="tab" aria-selected="true" className="van-tab van-tab--active">
                    <span className="van-tab__text van-tab__text--ellipsis">Rekor penambahan</span></div>
                  <div role="tab" className="van-tab"><span className="van-tab__text van-tab__text--ellipsis">Rekor pengeluaran</span></div>
                  <div className="van-tabs__line" style={{ transform: 'translateX(103px) translateX(-50%)' }} />
                </div>
              </div>
              <div className="van-tabs__content">
                <div data-v-428b4004 role="tabpanel" className="van-tab__pane" style={{}}>
                  <div data-v-428b4004 className="van-pull-refresh">
                    <div className="van-pull-refresh__track" style={{ transitionDuration: '0ms' }}>
                      <div className="van-pull-refresh__head" />

                      {/* View Topup Data Here */}
                      {(Status === 200) ? <ShowData /> : <NoneData />}

                    </div>
                  </div>
                </div>
                <div data-v-428b4004 role="tabpanel" className="van-tab__pane" style={{ display: 'none' }}>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/} {/**/}
        <div data-v-428b4004 id="captcha" />
        {/**/} {/**/}
      </div>
    </div >
  )
}

export default DompetKu
