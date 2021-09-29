import React, { useEffect } from 'react'
import Routes from '../Routes'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { AuthContextProvider } from "../context/AuthContext";
import { CookiesProvider } from 'react-cookie';
import axios from 'axios'
import { CurrentUserContextProvider } from '../context/CurrentUserContext';
import { AllTugasContextProvider } from '../context/AllTugasContext';
import { TugasContextProvider } from '../context/TugasContext';
import { GetAllVipCardContextProvider } from '../context/GetAllVipCard';
import { CurrentTeamContextProvider } from '../context/GetCurrentTeam';
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <AuthContextProvider>
      <CurrentUserContextProvider>
        <CurrentTeamContextProvider>
          <AllTugasContextProvider>
            <GetAllVipCardContextProvider>
              <TugasContextProvider>
                <CookiesProvider>
                  <div className="Body">
                    <AlertProvider template={AlertTemplate} {...options}>
                      <Routes />
                    </AlertProvider>
                  </div>
                </CookiesProvider>
              </TugasContextProvider>
            </GetAllVipCardContextProvider>
          </AllTugasContextProvider>
        </CurrentTeamContextProvider>
      </CurrentUserContextProvider>
    </AuthContextProvider>
  )
}

export default App