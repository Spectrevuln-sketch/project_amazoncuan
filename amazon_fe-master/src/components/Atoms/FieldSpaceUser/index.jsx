import React from 'react'

const FieldSpaceUser = ({ label }) => {
    return (
        <>
            <i data-v-75c77d1d className="van-icon van-cell__left-icon">
                <img data-v-75c77d1d src="https://fabulouswish.com/static/icon/info_003.png" className="van-icon__image" />{/**/}
            </i>
            <div data-v-75c77d1d className="van-cell__title"><span data-v-75c77d1d>{label}</span></div>
            <div data-v-75c77d1d className="van-cell__value"><span data-v-75c77d1d>Tekan untuk pengaturan</span></div>
            <i data-v-75c77d1d className="van-icon van-icon-arrow van-cell__right-icon">
                {/**/}
            </i>
        </>
    )
}

export default FieldSpaceUser
