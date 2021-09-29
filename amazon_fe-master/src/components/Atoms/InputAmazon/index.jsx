import React from 'react'

const InputAmazon = ({ label, ...rest }) => {
    return (
        <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
            <div className="van-cell__title van-field__label"><span>{label}</span></div>
            <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                    <input {...rest} className="van-field__control" /></div>
            </div>
        </div>
    )
}

export default InputAmazon
