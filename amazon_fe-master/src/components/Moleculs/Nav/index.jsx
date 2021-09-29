import React from 'react'
import { IconContext } from "react-icons";
import { RiArrowDropLeftLine } from "react-icons/ri"
import { useHistory } from 'react-router-dom';
const Nav = () => {
  const history = useHistory();
  return (
    <div className="van-nav-bar__content" onClick={() => history.push('')}>
      <IconContext.Provider value={{ color: "black", size: "50px" }}>
        <span style={{ paddingLeft: "10px", marginTop: '10px' }}>
          <RiArrowDropLeftLine />
        </span>
      </IconContext.Provider>
    </div>
  )
}

export default Nav;
