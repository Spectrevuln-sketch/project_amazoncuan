import React from 'react'
import './login_page_style.css'
import { FormLogin, Nav } from '../../../components';
// import React Helmet
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amazon | Login</title>
      </Helmet>
      <div className="PageBox" style={{ padding: "0px" }}>
        <Nav />
        <img src="assets/images/amazon.jpg" alt="imagePath" style={{ height: "100%", width: "100%" }} />
        <FormLogin />
      </div>
    </>
  )
}

export default LoginPage
