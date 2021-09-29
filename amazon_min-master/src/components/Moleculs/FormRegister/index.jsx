import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthInput, PasswordInput, ButtonFrom, CopyRight, FormCheck } from '../../Atoms'
const FormRegister = ({ title, ImgSrc }) => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [kode_admin, setKodeAdmin] = useState('');
    const [password, setPassword] = useState('');
    const Remember = [
        { id: 1, text: "I agree to Portal's " },
        { id: 2, text: <a href="#" class="app-link">Terms of Service</a> },
        { id: 3, text: " and " },
        { id: 4, text: <a href="#" class="app-link">Privacy Policy</a> }
    ];
    const history = useHistory();
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })


    const SubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const CreateAdmin = await api.post('/create_admin', {
                admin_email: email,
                admin_name: fullname,
                admin_kode: kode_admin,
                password: password
            })
            if (CreateAdmin.status === 201) {
                await toast(`🍺 Make Your Team ${CreateAdmin.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                history.push('/')
            }
            if (CreateAdmin.status === 200) {
                await toast(`🍺 ${CreateAdmin.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                history.push('/')
            }
        } catch (err) {
            if (err.response.status === 400) {
                const ValidateMsg = err.response.data.message;
                console.log(ValidateMsg)
                ValidateMsg.map(errMsg => {
                    console.log(errMsg.msg)
                    toast(`😥 ${errMsg.msg}`, {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
            }
            if (err.response.status === 404) {
                toast(`😥 ${err.response.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        }
    }

    return (
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4">
                        <a className="app-logo" onClick={() => history.push("/")}>
                            <img className="logo-icon me-2" src={ImgSrc} alt="logo" />
                        </a>
                    </div>
                    <h2 className="auth-heading text-center mb-4">{title}</h2>
                    <div className="auth-form-container text-start mx-auto">
                        <form className="auth-form auth-signup-form" onSubmit={SubmitRegister}>
                            <AuthInput type="email" name="email" id="email" label="Email" placeholder="Email Admin" onChange={e => setEmail(e.target.value)} />
                            <AuthInput type="text" name="fullname" id="fullname" label="fullname" placeholder="Fullname" onChange={e => setFullname(e.target.value)} />
                            <PasswordInput type="password" hidden={true} name="password" id="password" label="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <AuthInput type="text" name="kode_admin" id="kode_admin" label="Kode Admin" placeholder="Kode Refrensi Admin" onChange={e => setKodeAdmin(e.target.value)} />
                            <ButtonFrom type="submit" label="Register" />
                        </form>
                        <div className="auth-option text-center pt-5">Already have an account? <a className="text-link" href="#" onClick={() => history.push('/')}>Log in</a></div>
                    </div>{/*//auth-form-container*/}
                </div>{/*//auth-body*/}
                <CopyRight />
            </div>{/*//flex-column*/}
        </div>
    )
}

export default FormRegister
