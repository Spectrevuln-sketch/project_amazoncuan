import React, { useState, useContext } from 'react';
import AuthAdmin from '../../../context/AuthAdmin';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthAdmin)
  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })

  const LogoutAccount = async (e) => {
    e.preventDefault();
    try {
      const CurrentLogout = await api.get('/logoutAdmin');
      console.log(CurrentLogout)
      if (CurrentLogout.status === 200) {
        await toast(`🥂 ${CurrentLogout.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        getLoggedIn()
        console.log(getLoggedIn())
        history.push('/');
      }
    } catch (err) {
      if (err.response.status === 500) {
        await toast(`😢 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        await history.push('/');
      }
    }

  }

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="app-header-inner">
      <div className="container-fluid py-2">
        <div className="app-header-content">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <Link to="#" id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} d="M4 7h22M4 15h22M4 23h22" /></svg>
              </Link>
            </div>
            {/*//col*/}
            <div className="app-utilities col-auto">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} className="app-utility-item app-user-dropdown dropdown">
                <DropdownToggle caret className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{ backgroundColor: "transparent" }}>
                  <img src="assets/images/user.png" alt="user profile" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                  <DropdownItem ><Link className="dropdown-item" to="#">Profile Setup</Link></DropdownItem>
                  <DropdownItem ><Link className="dropdown-item" to="#">Team Management</Link></DropdownItem>
                  <DropdownItem ><hr className="dropdown-divider" /></DropdownItem>
                  <DropdownItem ><span className="dropdown-item" onClick={LogoutAccount}>Log Out</span></DropdownItem>
                </DropdownMenu>
              </Dropdown>{/*//app-user-dropdown*/}
            </div>{/*//app-utilities*/}
          </div>{/*//row*/}
        </div>{/*//app-header-content*/}
      </div>{/*//container-fluid*/}
    </div>
  )
}

export default HeaderNav
