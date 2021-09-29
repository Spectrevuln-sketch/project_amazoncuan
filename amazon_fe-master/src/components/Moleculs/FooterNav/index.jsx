import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import './nav-footer.css';
// icon Atoms
import { IconContext } from "react-icons";
import { FaHome, FaRegUser } from "react-icons/fa";
import { RiTaskFill } from "react-icons/ri";
import { GiCutDiamond, GiSwapBag } from "react-icons/gi";
import Cookies from 'js-cookie';
const FooterNav = () => {
  const [SegmentUri, setSegmentUri] = useState(window.location.pathname)
  const [Cookie, setCookie] = useState(window.location.pathname)
  const history = useHistory();

  const RedirectTo = async (url) => {
    await history.push(url)
  }


  return (
    <div id="amazon-bg-silver" className="van-tabbar van-tabbar--fixed" style={{ Zindex: "99" }}>
      <div data-v-0ebd4fa4="" className={SegmentUri === "/dashboard-user" ? "van-tabbar-item van-tabbar-item--active" : "van-tabbar-item"} style={{ color: "#000" }}>
        <Link to="#" onClick={() => RedirectTo("/dashboard-user")}>
          <div className="van-tabbar-item__icon">

            <IconContext.Provider value={SegmentUri === "/dashboard-user" ? { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" } : { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" }}>
              <div style={SegmentUri === "/dashboard-user" ? { textAlign: "center", backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);" } : { textAlign: "center" }}>
                <FaHome color="dark" />
              </div>
            </IconContext.Provider>

          </div>

          <div className="van-tabbar-item__text">
            Halaman
          </div>
        </Link>
      </div>
      <div data-v-0ebd4fa4="" className={SegmentUri === "/myTask" ? "van-tabbar-item van-tabbar-item--active" : "van-tabbar-item"} style={{ color: "#000" }}>
        <Link to="#" onClick={() => RedirectTo("/myTask")}>
          <div className="van-tabbar-item__icon">
            <IconContext.Provider value={SegmentUri === "/myTask" ? { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" } : { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" }}>
              <div style={{ textAlign: "center" }}>
                <RiTaskFill />
              </div>
            </IconContext.Provider>
          </div>
          <div className="van-tabbar-item__text">
            Tugas
          </div>
        </Link>
      </div>
      <div data-v-0ebd4fa4="" className={SegmentUri === "/vip" ? "van-tabbar-item van-tabbar-item--active" : "van-tabbar-item"} style={{ color: "#000" }}>
        <Link to="#" onClick={() => RedirectTo("/vip")}>
          <div className="van-tabbar-item__icon">
            <IconContext.Provider value={SegmentUri === "/vip" ? { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" } : { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" }}>
              <div style={{ textAlign: "center" }}>
                <GiCutDiamond />
              </div>
            </IconContext.Provider>
          </div>
          <div className="van-tabbar-item__text">
            VIP
          </div>
        </Link>
      </div>
      <div data-v-0ebd4fa4="" className={SegmentUri === "/Profit" ? "van-tabbar-item van-tabbar-item--active" : "van-tabbar-item"} style={{ color: "#000" }}>
        <Link to="#" onClick={() => RedirectTo("/Profit")}>
          <div className="van-tabbar-item__icon">
            <IconContext.Provider value={SegmentUri === "/Profit" ? { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" } : { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" }}>
              <div style={{ textAlign: "center" }}>
                <GiSwapBag />
              </div>
            </IconContext.Provider>
          </div>
          <div className="van-tabbar-item__text">
            Pendapatan
          </div>
        </Link>
      </div>
      <div data-v-0ebd4fa4="" className={SegmentUri === "/profileUser" ? "van-tabbar-item van-tabbar-item--active" : "van-tabbar-item"} style={{ color: "#000" }}>
        <Link to="#" onClick={() => RedirectTo("/profileUser")}>
          <div className="van-tabbar-item__icon">
            <IconContext.Provider value={SegmentUri === "/profileUser" ? { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" } : { backgroundImage: "linear-gradient(to left bottom, #5d9cee, #4a8de9, #377de3, #256edc, #115ed5);", size: "25px" }}>
              <div style={{ textAlign: "center" }}>
                <FaRegUser />
              </div>
            </IconContext.Provider>
          </div>
          <div className="van-tabbar-item__text">
            Milikku
          </div>
        </Link>
      </div>
    </div>

  )
}

export default FooterNav
