import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
// import icons
import { IconContext } from "react-icons";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
const TypePembayaranNavHeader = ({ title }) => {
  const [SegmentUri, setSegmentUri] = useState(window.location.pathname)
  const history = useHistory();


  return (
    <div data-v-7fcad33a className="van-nav-bar">
      <div className="van-nav-bar__content">
        <div className="van-nav-bar__left" onClick={() => history.goBack()}>
          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div style={{ marginTop: "10px" }} >
              <RiArrowDropLeftLine />
            </div>
          </IconContext.Provider>
        </div>
        <div className="van-nav-bar__title van-ellipsis">{title}</div>
        {/* <div className="van-nav-bar__right"><span className="van-nav-bar__text">Rekor</span></div> */}
      </div>
    </div>

  )
}

export default TypePembayaranNavHeader
