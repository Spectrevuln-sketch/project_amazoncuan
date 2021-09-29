import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
// import Context
import UserContext from '../../../context/CurrentUserContext';
// import icons
import { IconContext } from "react-icons";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FcSmartphoneTablet } from 'react-icons/fc';
import { useHistory } from 'react-router';
const TypePembayaranNavPaymentMethod = () => {
  const history = useHistory();
  const alert = useAlert();
  const { UserData } = useContext(UserContext);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  const SelfTransaction = async ({ code_bank, no_rek, imgSrc }) => {
    try {
      const PenddingTopup = await axiosInstnce.post('/pendding-topup', {
        code_bank,
        no_rek,
        imgSrc
      })
      if (PenddingTopup.status === 200) {
        history.push({
          pathname: '/typePembayaranForm',
          search: `?code_bank=${code_bank}&noRek=${no_rek}&img_path=${process.env.REACT_APP_MAIN_API}/${imgSrc}`,
          state: { detail: UserData }
        })
      }
    } catch (err) {
      if (err.response.status === 400) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>);
      }
    }
  }



  return (
    <>
      <div>
        <div data-v-7fcad33a role="button" tabIndex={0} className="pay-btn van-cell van-cell--clickable" onClick={() => history.push('/typePembayaranForm')}>
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div style={{ paddingRight: "15px", marginTop: "20px" }}>
              <FcSmartphoneTablet />
            </div>
          </IconContext.Provider>

          <div data-v-7fcad33a className="van-cell__title">
            <div data-v-7fcad33a>
              <b data-v-7fcad33a className="title">Bank Virtual Account</b>
            </div>
          </div>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <RiArrowDropRightLine />
            </div>
          </IconContext.Provider>
        </div>
        <div data-v-7fcad33a role="button" tabIndex={0} className="pay-btn van-cell van-cell--clickable" onClick={() => SelfTransaction({ code_bank: 'mandiri-self-pay', no_rek: 1120014080662, imgSrc: "assets/icon/mandiri.png" })}>

          <img src="assets/icon/mandiri.png" style={{ width: "2em", marginLeft: "-10px", paddingRight: "10px" }} alt="bri-icon" />
          <div data-v-7fcad33a className="van-cell__title">
            <div data-v-7fcad33a>
              <b data-v-7fcad33a className="title">MANDIRI 1120014080662</b>
            </div>
          </div>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <RiArrowDropRightLine />
            </div>
          </IconContext.Provider>

        </div>
        <div data-v-7fcad33a role="button" tabIndex={0} className="pay-btn van-cell van-cell--clickable" onClick={() => SelfTransaction({ code_bank: 'bri-self-pay', no_rek: 112082328535943, imgSrc: "assets/icon/bri.png" })}>
          <img src="assets/icon/bri.png" style={{ width: "2em", marginLeft: "-10px", paddingRight: "10px" }} alt="bri-icon" />
          <div data-v-7fcad33a className="van-cell__title">
            <div data-v-7fcad33a>
              <b data-v-7fcad33a className="title">BRI BRIVA 112082328535943</b>
            </div>
          </div>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <RiArrowDropRightLine />
            </div>
          </IconContext.Provider>
        </div>


        <div data-v-7fcad33a role="button" tabIndex={0} className="pay-btn van-cell van-cell--clickable" onClick={() => SelfTransaction({ code_bank: 'permata-self-pay', no_rek: 8528081294337598, imgSrc: "assets/icon/permata.png" })}>
          <img src="assets/icon/permata.png" style={{ width: "2em", marginLeft: "-10px", paddingRight: "10px" }} alt="bri-icon" />
          <div data-v-7fcad33a className="van-cell__title">
            <div data-v-7fcad33a>
              <b data-v-7fcad33a className="title">PERMATA 8528081294337598</b>
            </div>
          </div>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <RiArrowDropRightLine />
            </div>
          </IconContext.Provider>
        </div>

        <div data-v-7fcad33a role="button" tabIndex={0} className="pay-btn van-cell van-cell--clickable" onClick={() => SelfTransaction({ code_bank: 'bca-self-pay', no_rek: 39358085840505305, imgSrc: "assets/icon/bca.png" })}>
          <img src="assets/icon/bca.png" style={{ width: "2em", marginLeft: "-10px", paddingRight: "10px" }} alt="bri-icon" />
          <div data-v-7fcad33a className="van-cell__title">
            <div data-v-7fcad33a>
              <b data-v-7fcad33a className="title">BCA 39358085840505305</b>
            </div>
          </div>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "20px" }}>
              <RiArrowDropRightLine />
            </div>
          </IconContext.Provider>
        </div>

      </div>
    </>
  )
}

export default TypePembayaranNavPaymentMethod
