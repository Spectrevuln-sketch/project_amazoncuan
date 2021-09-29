import React from 'react'
import { Nav, FormRegister, Captcha } from '../../../components/Moleculs';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amazon | Register</title>
      </Helmet>
      <div className="register_page" style={{ background: "none" }}>
        <Nav />
        <FormRegister />
        <Captcha />
      </div>
      <div className="float_button">
        <div className="float_info" style={{ width: "80px", height: "80px", left: "1840px", top: "515.35px" }}>
          <img src="assets/images/customer.png" alt="" />
          <span className="text">Pelayanan pelanggan online</span>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
