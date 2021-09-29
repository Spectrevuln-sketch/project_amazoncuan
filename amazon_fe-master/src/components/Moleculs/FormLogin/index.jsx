import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert';
import axios from "axios";
import AuthContext from '../../../context/AuthContext'
import './form-login-style.css'
import Cookies from 'universal-cookie';
import { Form } from 'reactstrap';
// icon
import { TiUser, TiLockClosed } from 'react-icons/ti';
import { FacoButton, FacoInput, FacoInputCaption } from '../../Atoms';
const FormLogin = () => {
  const cookie = new Cookies()
  const history = useHistory()
  var [no_tlp, setNoTlp] = useState("");
  var [password, setPassword] = useState("");
  const alert = useAlert();
  const { getLoggedIn } = useContext(AuthContext);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })



  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {

      var LoginSubmit = await axiosInstnce.post('/login_auth', {
        no_tlp: no_tlp,
        password: password,

      })
      if (LoginSubmit.data.status === 200) {
        await alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{LoginSubmit.data.message}</div>);
        await getLoggedIn();
        history.push('/');
      }
    } catch (err) {
      console.log(err.response.status)
      if (err.response.status === 400)
        alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>);
      if (err.response.status === 404) {
        var message = err.response.data.errMsg
        message.map(errMsg => {
          alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{errMsg.msg}</div>);
        })
      }
    }
  }

  return (
    <>
      <Form className="van-form" style={{ marginTop: "0" }} onSubmit={onSubmitLogin}>
        <FacoInputCaption type="tel" icon={<TiUser />} placeholder="Silahkan isi nomor tlp anda" name="no_tlp" id="no_tlp" onChange={e => setNoTlp(e.target.value)} />
        <FacoInput icon={<TiLockClosed />} type="password" name="password" id="password" placeholder="Silahkan isi password" onChange={e => setPassword(e.target.value)} />
        <FacoButton title="Masuk Sekarang" />
        <div style={{ marginTop: "5px" }}>
          <Link to="/register" className="link-page-left" slot="a">Daftar</Link>
          <Link to="/resetPaw" className="link-page-right" slot="line">Menukar kata sandi</Link>
        </div>
      </Form>
    </>
  )
}

export default FormLogin
