import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardAdmin, ManagementTugas, CreateTugasPage, EditTugasPage, ManagementPendapatanUser, ManagementTopup } from '../AdminPage';
import { HeaderNav, SideBar } from '../../components/Moleculs';
import { Helmet } from 'react-helmet';
const MainPage = () => {
    // insert Nested Route
    return (
        <>
            {/* sidebar */}
            <header className="app-header fixed-top">
                {/* header nav */}
                <HeaderNav />
                {/* side panel */}
                <SideBar />
            </header>{/*//app-header*/}
            {/* END Side Bar */}
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <Switch>
                            <Route path="/dashboard">
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | Dashboard</title>
                                </Helmet>
                                <DashboardAdmin />
                            </Route>
                            <Route path="/tugasManagement" >
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | Managemenet Tugas</title>
                                </Helmet>
                                <ManagementTugas />
                            </Route>
                            <Route path="/create_tugas" >
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | Create Tugas</title>
                                </Helmet>
                                <CreateTugasPage />
                            </Route>
                            <Route path="/editTugas/:id" >
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | Edit Tugas</title>
                                </Helmet>
                                <EditTugasPage />
                            </Route>
                            <Route path="/pendapatan" >
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | Pendapatan</title>
                                </Helmet>
                                <ManagementPendapatanUser />
                            </Route>
                            <Route path="/topup-user" >
                                <Helmet>
                                    <meta charSet="utf-8" />
                                    <title>Admin Amazon | TopUp User</title>
                                </Helmet>
                                <ManagementTopup />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            {/* // footrer */}
        </>
    )
}

export default MainPage
