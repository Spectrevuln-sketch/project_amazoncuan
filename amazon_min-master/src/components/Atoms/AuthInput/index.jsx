import React from 'react'

const AuthInput = ({ label, ...rest }) => {
    return (
        <div className="email mb-3">
            <label className="sr-only" htmlFor="signin-email">{label}</label>
            <input {...rest} className="form-control signin-email" />
        </div>
    )
}

export default AuthInput
