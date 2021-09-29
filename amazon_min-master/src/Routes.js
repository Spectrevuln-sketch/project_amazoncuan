import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage, LoginPage, RegisterPage } from './page';
import AuthAdmin from './context/AuthAdmin';
const Routes = () => {
    const { loggedIn } = useContext(AuthAdmin);

    console.log(loggedIn)
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {loggedIn === true ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    {loggedIn === true ? <Redirect to="/dashboard" /> : <LoginPage />}
                </Route>
                <Route path="/register">
                    {loggedIn === true ? <Redirect to="/dashboard" /> : <RegisterPage />}
                </Route>
                <Route path="/dashboard">
                    {loggedIn === true ? <MainPage /> : <Redirect to="/login" />}

                </Route>
                {loggedIn === false && (
                    <>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/register">
                            <RegisterPage />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/dashboard">
                            <MainPage />
                        </Route>
                        <Route path="/tugasManagement">
                            <MainPage />
                        </Route>
                        <Route path="/create_tugas">
                            <MainPage />
                        </Route>
                        <Route path="/editTugas/:id">
                            <MainPage />
                        </Route>
                        <Route path="/pendapatan">
                            <MainPage />
                        </Route>
                        <Route path="/topup-user">
                            <MainPage />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    )
}

export default Routes
