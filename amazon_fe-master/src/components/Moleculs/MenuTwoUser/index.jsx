import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaTasks, FaUserEdit, FaRegCreditCard } from "react-icons/fa";
import { FcComboChart, FcMoneyTransfer, FcPieChart, FcReadingEbook, FcRating, FcDownload } from "react-icons/fc";
import { GiThreeFriends } from "react-icons/gi";
import { HiOutlineChat } from "react-icons/hi";

const MenuTwoUser = () => {


  return (
    <div className="Menu van-grid" style={{ paddingLeft: '5px' }}>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px' }}>
        <Link to={"/EditUser"}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "lightblue", size: "40px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FaUserEdit />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Informasi pribadi</span>
          </div>
        </Link>
      </div>
      <div className="message van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px' }}>
        <Link to={"/ManageCenter"}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "40px" }}>
              <div style={{ marginBottom: "10px" }}>
                <HiOutlineChat />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Sentro ng Mensahe</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px' }}>
        <Link to={"/DayReport"}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "40px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcComboChart />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Laporan harian</span>
          </div>
        </Link>
      </div>

      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/FoundRecord"}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcMoneyTransfer />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Rekor uang</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/Promote_user"}>

          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "lightblue", size: "40px" }}>
              <div style={{ marginBottom: "10px" }}>
                <GiThreeFriends />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Ajak teman</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/TeamReport"}>

          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcPieChart />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Laporan tim</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/ManualBantuan"}>

          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcReadingEbook />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Manual bantuan</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/PusatCredit"}>

          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcRating />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Pusat kredit</span>
          </div>
        </Link>
      </div>
      <div className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '5px', marginTop: '5px' }}>
        <Link to={"/UnduhAPP"}>

          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <IconContext.Provider value={{ color: "#000", size: "30px" }}>
              <div style={{ marginBottom: "10px" }}>
                <FcDownload />
              </div>
            </IconContext.Provider>
            <span className="van-grid-item__text" style={{ color: "#000" }}>Unduh APP</span>
          </div>
        </Link>
      </div>
    </div>


  )
}

export default MenuTwoUser
