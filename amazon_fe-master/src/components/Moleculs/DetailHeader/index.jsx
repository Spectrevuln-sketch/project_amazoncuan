

import React from 'react'
import { useHistory } from 'react-router-dom'
// icon Atoms
import { IconContext } from "react-icons";
import { RiArrowLeftSLine } from "react-icons/ri"
const HeaderUser = () => {
  /* Go Back */
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  /* End Go Back */
  return (
    <div data-v-24948ec7="" className="van-nav-bar">
      <div className="van-nav-bar__content">
        <div className="van-nav-bar__left" onClick={goBack}>

          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div>
              <RiArrowLeftSLine />
            </div>
          </IconContext.Provider>

        </div>
        <div className="van-nav-bar__title van-ellipsis">Detail</div>
      </div>
    </div>

  )
}

export default HeaderUser
