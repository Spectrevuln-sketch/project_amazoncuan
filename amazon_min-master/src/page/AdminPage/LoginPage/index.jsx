import React from 'react'
import { Helmet } from 'react-helmet'
import { AuthImage, FormLogin } from '../../../components';
const LoginPage = () => {
    return (
        <div className="row g-0 app-auth-wrapper">
            <FormLogin title="Login To Portal" ImgSrc="assets/images/app-logo.svg" />
            <AuthImage />
        </div>
    )
}

export default LoginPage
