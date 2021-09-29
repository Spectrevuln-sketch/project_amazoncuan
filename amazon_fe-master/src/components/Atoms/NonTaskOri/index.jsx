import React, { useEffect } from 'react'
import { ContentLoading } from '../../../components';
const NonTaskOri = () => {
    useEffect(() => {
        setTimeout(() => {
            return <ContentLoading />
        }, 1000)
    }, [])
    return (
        <div data-v-65641047 role="feed" className="van-list">
            <img data-v-65641047 alt="" src="assets/images/no_data.7d5de33.png" style={{ display: 'block', margin: '20px auto' }} />
            <div className="van-list__finished-text">Tidak ada data</div>
            <div className="van-list__placeholder" />
        </div>
    )
}

export default NonTaskOri
