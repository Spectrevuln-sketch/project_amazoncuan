import React from 'react'

const FacoButton = ({ title, ...rest }) => {
  return (

    <div style={{ padding: "15px 16px" }}>
      <button {...rest} className="van-button van-button--large van-button--block van-button--round" style={{ fontSize: "18px", backgroundImage: "radial-gradient(circle, #91c3f2, #7dbaf5, #69b1f7, #53a8f9, #389efb)" }}>
        <span className="font-smaller" style={{ color: "white", fontSize: "small" }}>{title}</span>
      </button>
    </div>

  )
}

export default FacoButton
