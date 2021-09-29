import React, { useState, useContext } from 'react'
import { useAlert } from 'react-alert';
// import Component
import { TypePembayaranNavHeader, TypePembayaranShareNotif } from '../../../components/Moleculs'
// import ReactStrap
import { Collapse, CardBody, Card, Form, FormGroup, Input, Label, Col, Button } from 'reactstrap'
// import icons
import { IconContext } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";
// import React Helmet
import { Helmet } from "react-helmet";
import axios from "axios";
import './type-pembayaran-form.css'
import Cookies from 'universal-cookie';
import UserContext from '../../../context/CurrentUserContext';
import { useHistory, useLocation } from 'react-router';
import "animate.css";

const TypePembayaranFrom = () => {
  const { UserData } = useContext(UserContext);
  const history = useHistory();
  const alert = useAlert();
  const cookie = new Cookies();
  var [cost, setCost] = useState("");
  var [modalPayment, setModalPayment] = useState();
  // NOTE get search params
  var search = useLocation().search;
  const code_bank = new URLSearchParams(search).get('code_bank')
  const no_rek = new URLSearchParams(search).get('noRek')
  const imgSrc = new URLSearchParams(search).get('img_path')
  // NOTE end search params
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_TOPUP
  })

  const CheckData = async () => {
    if (UserData.nama_user === null || UserData.email_user === null) {
      await history.push('/detail_user')
      await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Nama User dan Email Harus di isi</div>);
    }
    if (UserData.rekening === null) {
      await history.push('/akun_bank')
    }
    if (UserData.namabank === null) {
      await history.push('/akun_bank')
    }
    if (UserData.nama_user !== null && UserData.email_user !== null && UserData.namabank !== null) {
      RedirectTo();
    }
  }

  const RedirectTo = () => {
    if (code_bank) {
      window.location.href = `${process.env.REACT_APP_API_TOPUP}/self-payment?code_bank=${code_bank}&noRek=${no_rek}&img_path=${imgSrc}&amount=${cost}`
    } else {

      window.location.href = process.env.REACT_APP_API_TOPUP + `/paymentCheckOut?cost=${cost}`;
    }
  }


  const ModalPayment = (e) => {
    e.preventDefault();
    setModalPayment(
      <div data-v-7fcad33a className="van-popup van-popup--center  animate__animated animate__slideInDown" style={{ background: 'transparent', width: '80%', textAlign: 'center', zIndex: 2005, margin: "-5rem 0 0 -2.8rem" }}>
        <dl data-v-7fcad33a className="NoticePopup">
          <dt data-v-7fcad33a style={{ fontSize: "medium" }}>Pembayaran online</dt>
          <dd data-v-7fcad33a>
            <div data-v-7fcad33a role="radiogroup" className="payment van-radio-group">
              <div data-v-7fcad33a className="van-cell">
                <Button style={{ padding: "5%", fontSize: "small", background: 'transparent', display: 'inline-block', width: "100%", textAlgin: "left" }} className="payment" onClick={() => CheckData()}>
                  SAFE_BANK
                </Button>
              </div>
            </div>
          </dd>
          <div data-v-7fcad33a className="popup-pay">
            <ul data-v-7fcad33a>
              <li data-v-7fcad33a style={{ background: 'rgb(89, 48, 222)' }}>
                <span data-v-7fcad33a>
                  <Button style={{ fontSize: "small", background: 'transparent', textAlign: "center" }} onClick={e => setModalPayment("")}>Close</Button>
                </span>
              </li>
            </ul>
          </div>
        </dl>
      </div>
    )
  }



  return (
    <div data-v-ebf933f6>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Topup</title>
      </Helmet>
      <div data-v-7fcad33a data-v-ebf933f6 className="detail-info Site IndexBox">
        <TypePembayaranNavHeader title="Informasi Pembayaran" />
        <TypePembayaranShareNotif />
        <Form data-v-7fcad33a className="form-container van-form" onSubmit={e => ModalPayment(e)}>
          <FormGroup row data-v-7fcad33a className="van-cell van-field">
            <Label for="saluran-pembayaran" sm={1}><div style={{ width: "15px" }}>Saluran penambahan uang</div></Label>
            <Col sm={11}>
              <IconContext.Provider value={{ color: "#2C41F1", size: "25px", className: "stay-right" }}>
                <span>
                  <AiFillCheckCircle />
                  <span style={{ fontSize: "15px", paddingLeft: "5px" }}>Pembayaran online</span>
                </span>
              </IconContext.Provider>
              {/* <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> */}
            </Col>
          </FormGroup>
          <FormGroup row data-v-7fcad33a className="van-cell van-field">
            <Label for="jumlah-pembayaran" sm={2}><span>Jumlah uang penambahan</span></Label>
            <Col sm={10}>
              <Input type="number" name="jumlah-pembayaran" id="jumlah-pembayaran" placeholder="Sila mengisi jumlah penambahan uang" onChange={e => setCost(e.target.value)} />
            </Col>
          </FormGroup>
          <div data-v-7fcad33a className="footer">
            <Button type="submit" style={{ display: "block", margin: "5px auto", height: "10%", padding: "5px", fontSize: "small" }} data-v-7fcad33a className="recharge" >
              Segera isi uang
            </Button>
            <Button style={{ display: "block", margin: "5px auto", padding: "5px", height: "10%", fontSize: "small" }} data-v-7fcad33a className="cancel">
              Kembali
            </Button>
          </div>
        </Form>
        {modalPayment}
      </div>
    </div>
  )
}

export default TypePembayaranFrom
