import React from 'react'

const ButtonFrom = ({ label, ...rest }) => {
    return (
        <div className="text-center">
            <button {...rest} className="btn app-btn-primary w-100 theme-btn mx-auto">{label}</button>
        </div>
    )
}

export default ButtonFrom
