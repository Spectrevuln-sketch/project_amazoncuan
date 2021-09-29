import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { IconContext } from "react-icons";
import { GiReceiveMoney } from "react-icons/gi";
import { BsListTask } from "react-icons/bs";
import { RiSecurePaymentLine, RiHome3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [isActive, setActive] = useState(window.location.pathname);
  const history = useHistory();
  const IpaymuLogin = async () => {
    window.location.replace("https://my.ipaymu.com/login");
  }
  return (
    <div id="app-sidepanel" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop" />
      <div className="sidepanel-inner d-flex flex-column">
        <span onClick={() => history.push('/')} id="sidepanel-close" className="sidepanel-close d-xl-none">×</span>
        <div className="app-branding">
          <a className="app-logo" href="index.html"><img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" /><span className="logo-text">StoryMin</span></a>
        </div>{/*//app-branding*/}
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            <li className="nav-item">
              <Link className={isActive === "/dashboard" ? "nav-link active" : "nav-link"} to="/dashboard">
                {/* icon */}
                <IconContext.Provider value={{ color: "black", size: "20px" }}>
                  <span style={{ paddingRight: "10px", marginLeft: "-15%", opacity: "0.5" }}>
                    <RiHome3Line />
                  </span>
                </IconContext.Provider>

                <span className="nav-link-text">Dashboard</span>
              </Link>{/*//nav-link*/}
            </li>{/*//nav-item*/}
            <li className="nav-item">
              <Link className={isActive === "/tugasManagement" ? "nav-link active" : "nav-link"} to="/tugasManagement">
                {/* icon */}
                <IconContext.Provider value={{ color: "black", size: "20px" }}>
                  <span style={{ paddingRight: "10px", marginLeft: "-15%", opacity: "0.5" }}>
                    <BsListTask />
                  </span>
                </IconContext.Provider>

                <span className="nav-link-text">Managemenet Tugas</span>
              </Link>{/*//nav-link*/}
            </li>{/*//nav-item*/}
            <li className="nav-item">
              <Link className={isActive === "/pendapatan" ? "nav-link active" : "nav-link"} to="/pendapatan">
                {/* icon */}
                <IconContext.Provider value={{ color: "black", size: "20px" }}>
                  <span style={{ paddingRight: "10px", marginLeft: "-15%", opacity: "0.5" }}>
                    <GiReceiveMoney />
                  </span>
                </IconContext.Provider>
                <span className="nav-link-text">Pendapatan User</span>
              </Link>{/*//nav-link*/}
            </li>{/*//nav-item*/}
            <li className="nav-item has-submenu">
              <Link to="/management-payment" className={isActive === "/management-payment" ? "nav-link active submenu-toggle" : "nav-link submenu-toggle"} data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                <IconContext.Provider value={{ color: "black", size: "20px" }}>
                  <span style={{ paddingRight: "10px", marginLeft: "-15%", opacity: "0.5" }}>
                    <RiSecurePaymentLine />
                  </span>
                </IconContext.Provider>
                <span className="nav-link-text">Management Payment Gateway</span>
                <span className="submenu-arrow" onClick={() => setCollapse(true)}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>{/*//submenu-arrow*/}
              </Link>{/*//nav-link*/}
              <div id="submenu-1" className={collapse === true ? "submenu submenu-1 collapse show" : "collapse submenu submenu-1"} data-bs-parent="#menu-accordion">
                <ul className="submenu-list list-unstyled">
                  <li className="submenu-item"><Link to="/pendapatan" className="submenu-link">Penarikan Dana</Link></li>
                  <li className="submenu-item"><Link to="/topup-user" className="submenu-link" >Topup User</Link></li>
                  <li className="submenu-item"><Link className="submenu-link" onClick={IpaymuLogin} >Link Ipaymu</Link></li>
                </ul>
              </div>
            </li>{/*//nav-item*/}
          </ul>{/*//app-menu*/}
        </nav>{/*//app-nav*/}
        <div className="app-sidepanel-footer">
          <nav className="app-nav app-nav-footer">
            <ul className="app-menu footer-menu list-unstyled">
              <li className="nav-item">
                <a className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                  <span className="nav-icon">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                      <path fillRule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  <span className="nav-link-text">License</span>
                </a>{/*//nav-link*/}
              </li>{/*//nav-item*/}
            </ul>{/*//footer-menu*/}
          </nav>
        </div>{/*//app-sidepanel-footer*/}
      </div>{/*//sidepanel-inner*/}
    </div>
  )
}

export default SideBar
