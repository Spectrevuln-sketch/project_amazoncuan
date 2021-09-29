import React from 'react'
import { Input } from 'reactstrap';
import { IconContext } from "react-icons";
const FacoInput = ({ icon, ...rest }) => {
  return (
    <div className="van-cell van-cell--borderless van-field">
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <span style={{ paddingRight: "10px" }}>
          {icon}
        </span>
      </IconContext.Provider>
      <div className="van-cell__value van-cell__value--alone van-field__value">
        <div className="van-field__body">
          <Input autoComplete="off" className="van-field__control" {...rest} />
        </div>
      </div>
    </div>
  )
}

export default FacoInput
