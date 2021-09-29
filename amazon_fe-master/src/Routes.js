import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RegisterPage, LoginPage, DashboarUserPage, TaskLevel, TaskList, VIPPage, UserProfileData, DompetKu, TypePembayaran, TypePembayaranFrom, MyTask, Article, PostRecord, ManajementAssisten, EditUser, MessageCenter, DayReport, FoundRecord, TeamReport, ManualBantuan, PusatCredit, UnduhAPP, Profit, TaskShow, DetailEditUser, Promote, EditRekening, EditKataSandi, EditSandiDana } from './page/UserPage';

import AuthContext from './context/AuthContext'
const Routes = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn === false ? <Redirect to="/login" /> : <Redirect to="/dashboard-user" />}
        </Route>
        <Route path="/login">
          {loggedIn === false ? <LoginPage /> : <Redirect to="/dashboard-user" />}
        </Route>
        <Route path="/register">
          {loggedIn === false ? <RegisterPage /> : <Redirect to="/dashboard-user" />}
        </Route>
        <Route path="/dashboard-user">
          {loggedIn === false ? <Redirect to="/" /> : <DashboarUserPage />}
        </Route>
        {loggedIn === false && (<>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </>
        )}

        {loggedIn === true &&
          (<>
            <Route path="/dashboard-user">
              <DashboarUserPage />
            </Route>

            <Route path="/taskLevel/:id" component={TaskLevel} />
            <Route path="/taskList/:id" component={TaskList} />
            <Route path="/vip" component={VIPPage} />
            <Route path="/profileUser" component={UserProfileData} />
            <Route path="/dompetKu" component={DompetKu} />
            <Route path="/typePembayaran" component={TypePembayaran} />
            <Route path="/typePembayaranForm" component={TypePembayaranFrom} />
            <Route path="/myTask" component={MyTask} />
            <Route path="/Article" component={Article} />
            <Route path="/PostRecord" component={PostRecord} />
            <Route path="/ManajementAssisten" component={ManajementAssisten} />
            <Route path="/EditUser" component={EditUser} />
            <Route path="/ManageCenter" component={MessageCenter} />
            <Route path="/DayReport" component={DayReport} />
            <Route path="/FoundRecord" component={FoundRecord} />
            <Route path="/TeamReport" component={TeamReport} />
            <Route path="/ManualBantuan" component={ManualBantuan} />
            <Route path="/PusatCredit" component={PusatCredit} />
            <Route path="/UnduhAPP" component={UnduhAPP} />
            <Route path="/Profit" component={Profit} />
            <Route path="/TaskShow" component={TaskShow} />
            <Route path="/detail_user" component={DetailEditUser} />
            <Route path="/Promote_user" component={Promote} />
            <Route path="/akun_bank" component={EditRekening} />
            <Route path="/edit_sandi" component={EditKataSandi} />
            <Route path="/edit_sandi_dana" component={EditSandiDana} />
          </>
          )}
      </Switch>
    </Router>
  );
}

export default Routes;
