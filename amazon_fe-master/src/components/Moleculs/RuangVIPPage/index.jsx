import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { RiVipCrownLine, RiPlayCircleLine } from 'react-icons/ri';
import { BiMoney } from 'react-icons/bi'
const RuangVIPPage = () => {
  return (
    <div className="van-grid" style={{ paddingLeft: "4px" }}>
      <div className="van-grid-item" style={{ flexBasis: "33.3333%", paddingRight: "4px", width: "20px", backgroundColor: "#C9C9C9" }}>
        <div className="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center" id="amazon-bg-silver">
          <Link to="/vip">


            <div className="van-grid-item__icon-wrapper" style={{ textAlign: "center" }}>
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <RiVipCrownLine />
                </div>
              </IconContext.Provider>
              <p className="font-small">Ruang VIP</p>
            </div>


          </Link>
        </div>
      </div>
      <div data-v-18d0403e className="van-grid-item" style={{ flexBasis: "33.3333%", paddingRight: "4px", width: "20px" }}>
        <div className="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center" id="amazon-bg-silver">
          <Link to="/Article">


            <div className="van-grid-item__icon-wrapper" style={{ textAlign: "center" }}>
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <div>
                  <RiPlayCircleLine />
                </div>
              </IconContext.Provider>
              <p className="font-small">Video Tutorial</p>
            </div>

          </Link>
        </div>
      </div>
      <div className="van-grid-item" style={{ flexBasis: "33.3333%", paddingRight: "4px", width: "20px" }}>
        <div className="van-grid-item__content van-grid-item__content--horizontal van-grid-item__content--center" id="amazon-bg-silver">
          <div className="van-grid-item__icon-wrapper" style={{ textAlign: "center" }}>
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <div>
                <BiMoney />
              </div>
            </IconContext.Provider>
            <p className="font-small">Ganjaran Promosi</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RuangVIPPage
