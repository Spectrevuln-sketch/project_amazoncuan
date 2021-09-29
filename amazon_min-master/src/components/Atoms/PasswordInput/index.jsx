import React from 'react'

const PasswordInput = ({ label, hidden, ...rest }) => {
    return (
        <div className="password mb-3">
            <label className="sr-only" htmlFor="passowrd">{label}</label>
            <input {...rest} className="form-control signin-password" />
            <div className="extra mt-3 row justify-content-between">
                <div className="col-12" style={{ float: "right" }} hidden={hidden} >
                    <div className="forgot-password text-end">
                        <a href="reset-password.html">Forgot password?</a>
                    </div>
                </div>{/*//col-6*/}
            </div>{/*//extra*/}
        </div>
    )
}

export default PasswordInput
