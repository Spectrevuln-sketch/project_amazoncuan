import React from 'react'
import { FormRegister, AuthImage } from '../../../components';
const RegisterPage = () => {
    return (
        <div className="row g-0 app-auth-wrapper">
            {/* From Register Here */}
            <FormRegister title="Sign Up Here" ImgSrc="assets/images/app-logo.svg" />
            <AuthImage />
        </div>
    )
}

export default RegisterPage
