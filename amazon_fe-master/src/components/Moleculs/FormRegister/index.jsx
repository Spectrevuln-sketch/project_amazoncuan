import React, { useState, useEffect, useContext } from 'react';
import { Input, Form } from 'reactstrap';
import { IconContext } from "react-icons";
import { TiUser, TiLockClosed } from 'react-icons/ti';
import { FaTicketAlt } from 'react-icons/fa';
import { IoBarcode } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useAlert } from 'react-alert';
import { FacoButton, FacoInput } from '../../../components';
import { FacoInputCaption } from '../../Atoms';
import AuthContext from '../../../context/AuthContext';
const FormRegister = () => {
  const [CaptchaVal, setCaptchaVal] = useState("");
  const [Notlp, setNotlp] = useState("");
  const [Password1, setPassword1] = useState("");
  const [Password2, setPassword2] = useState("");
  const [kupon_akun, setKodeKupon] = useState("");
  const [captchaText, setCaptchaText] = useState([]);
  const [captchaSvg, setSVG] = useState("");
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext)
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  })
  const alert = useAlert()

  useEffect(() => {
    GenCaptcha();
  }, [])


  /* Get Captcha API */
  const GenCaptcha = async () => {
    let Captcha = await axiosInstnce.get('/gen-captcha');
    setCaptchaText(Captcha.data.text);
    setSVG(window.btoa(Captcha.data.captchaSVG))
  }
  /* End Get Captcha API */


  const SubmitNewUser = async (e) => {
    e.preventDefault();
    try {
      if (CaptchaVal !== captchaText) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>Wrong Captcha !</div>);
        GenCaptcha();
      }
      const AddNewUser = await axiosInstnce.post('/create_user', {
        no_tlp: Notlp,
        kode_akun: kupon_akun,
        password1: Password1,
        password2: Password2
      })
      if (AddNewUser.status === 200) {
        await alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{AddNewUser.data.message}</div>);
        await getLoggedIn()
        history.push('/');
      }
    } catch (err) {
      console.log(err.response)
      if (err.response.status === 409) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
      }
      if (err.response.status === 406) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
      }
      if (err.response.status === 404) {
        var MsgValidate = err.response.data.errMsg
        MsgValidate.map((Validate) => {
          alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{Validate.msg}</div>);
        })
      }
      if (err.response.status === 401) await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.message}</div>);
    }
  }


  return (
    <div className="Login ScrollBox">
      <h1 className="title-page" style={{ color: "#dark", marginLeft: "5%", margin: "10% 10%", fontSize: "115%", fontWeight: "bold" }}>Selamat Mendaftar </h1>
      <Form>
        <FacoInputCaption icon={<TiUser />} placeholder="Silahkan Maskan No Telp Anda" name="no_tlp" id="no_tlp" onChange={e => setNotlp(e.target.value)} />
        <div className="van-cell van-cell--borderless van-field">
          <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <span style={{ paddingRight: "10px" }}>
              <FaTicketAlt />
            </span>
          </IconContext.Provider>
          <div className="van-cell__value van-cell__value--alone van-field__value">
            <div className="van-field__body">
              <Input type="text" autoComplete="off" placeholder="Sila mengisi kode SMS" className="van-field__control" nama="kode_verifikasi" id="kode_verifikasi" onChange={e => setCaptchaVal(e.target.value)} />
              <div className="van-field__button">
                <div className="van-image"
                  style={{ width: "100px", height: "34px", display: "block", cursor: "pointer" }}>
                  <img src={`data:image/svg+xml;base64,${captchaSvg}`} className="van-image__img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FacoInput type="password" icon={<TiLockClosed />} placeholder="Sila megisi kata sandi" name="password1" id="password1" onChange={e => setPassword1(e.target.value)} />
        <FacoInput type="password" icon={<TiLockClosed />} placeholder="Sila verifikasi kata sandi anda" id="password2" name="passowrd2" onChange={e => setPassword2(e.target.value)} />
        <FacoInput type="text" icon={<IoBarcode />} placeholder="Silahkan Input Kode Undangan" id="kode_akun" name="kode_akun" onChange={e => setKodeKupon(e.target.value)} />
        <FacoButton title="Daftar segera" onClick={SubmitNewUser} />
      </Form>
      <div style={{ padding: "0px 16px" }}><button
        className="van-button van-button--info van-button--large van-button--plain van-button--block van-button--round"
        style={{ fontSize: "18px", marginTop: "10px", background: "transparent" }}>
        <div className="van-button__content"><span className="van-button__text">Akun
          telah wujud, unggah segera</span></div>
      </button>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/login" className="href" slot="line" style={{ color: "#black", fontSize: "small" }}>Masuk sekarang</Link>
        </div>
      </div>
    </div>
  )
}

export default FormRegister
