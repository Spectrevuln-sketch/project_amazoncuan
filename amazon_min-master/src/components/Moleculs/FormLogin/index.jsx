import React, { useState, useContext } from 'react'
import AuthAdmin from '../../../context/AuthAdmin';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthInput, ButtonFrom, CopyRight, PasswordInput } from '../../Atoms';

const FormLogin = ({ title, ImgSrc, hidden }) => {
    const [admin_email, setAdminEmail] = useState('');
    const [password, setPassword] = useState('');
    const { getLoggedIn } = useContext(AuthAdmin)
    const history = useHistory();
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true
    })

    /* Function Submin Form */
    const SubmitAuthLogin = async (e) => {
        e.preventDefault();
        try {
            const AuthLogin = await api.post('/admin_login', {
                admin_email,
                password
            })
            if (AuthLogin.status === 200) {
                await toast(`🥂 Make Your Team ${AuthLogin.data.message}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                await getLoggedIn();
                console.log(getLoggedIn())
                // history.push('/dashboard')
            }

        } catch (err) {
            console.log(err.response)
            if (err.response.status === 404) {
                const ValidateMsg = err.response.data.message;
                ValidateMsg.map(errMsg => {
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
            if (err.response.status === 400) {
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
    /* End Function Submin Form */



    return (
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4">
                        <a className="app-logo" href="index.html">
                            <img className="logo-icon me-2" src={ImgSrc} alt="logo" />
                        </a>
                    </div>
                    <h2 className="auth-heading text-center mb-5">{title}</h2>
                    <div className="auth-form-container text-start">
                        <form className="auth-form login-form" onSubmit={SubmitAuthLogin}>
                            <AuthInput type="email" label="Email Admintest" name="email" id="email" placeholder="Email Admin" onChange={e => setAdminEmail(e.target.value)} />
                            <PasswordInput type="password" label="Password" id="password" name="password" placeholder="Password" hidden={true} onChange={e => setPassword(e.target.value)} />
                            {/*//form-group*/}
                            <ButtonFrom type="submit" label="LOGIN" />
                        </form>
                        <div hidden={hidden} className="auth-option text-center pt-5">No Account? Sign Up <Link className="text-link" to="/register">here</Link>.</div>
                    </div>{/*//auth-form-container*/}
                </div>{/*//auth-body*/}
                <CopyRight />
            </div>
        </div>
    )
}

export default FormLogin
