import React from 'react'

const ButtonEditUser = ({ label, ...rest }) => {
    return (
        <div data-v-1ce3c9d1 style={{ padding: '15px' }}>
            <button data-v-1ce3c9d1 className="van-button van-button--danger van-button--normal van-button--block" {...rest}>
                <div data-v-1ce3c9d1 className="van-button__content"><span data-v-1ce3c9d1 className="van-button__text">{label}</span></div>
            </button>
        </div>
    )
}

export default ButtonEditUser
