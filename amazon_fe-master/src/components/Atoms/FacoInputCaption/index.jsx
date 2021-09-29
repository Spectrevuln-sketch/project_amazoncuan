import React from 'react'

import { IconContext } from "react-icons";
import { Input } from 'reactstrap';

const FacoInputCaption = ({ icon, ...rest }) => {
  return (
    <div className="van-cell van-cell--borderless van-field">
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <span style={{ paddingTop: "10px" }}>
          {icon}
        </span>
      </IconContext.Provider>
      <div className="van-cell__value van-cell__value--alone van-field__value">
        <div className="van-field__body">
          <div className="van-field__control van-field__control--custom">
            <div className="van-dropdown-menu">
              <div role="button" tabIndex="0" className="van-dropdown-menu__item"><span
                className="van-dropdown-menu__title">
                <div className="van-ellipsis" style={{ fontSize: "small", color: "#bbb" }}>+62</div>
              </span></div>
              <div>
                <div className="van-dropdown-item van-dropdown-item--down" style={{ top: "0px", display: "none" }}>
                </div>
              </div>
            </div>
            <div className="van-cell van-field"
              style={{ border: "0px", flex: "1 1 0 %", background: "transparent" }}>
              <div className="van-cell__value van-cell__value--alone van-field__value">
                <div className="van-field__body">
                  <Input className="van-field__control" {...rest} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FacoInputCaption
