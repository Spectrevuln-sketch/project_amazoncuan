import React from 'react'

const NonTask = (props) => {
  console.log(props)
  if (props.nonShow === true) {
    return (
      <div data-v-65641047 role="feed" className="van-list">
        <img data-v-65641047 alt="" src="assets/images/no_data.7d5de33.png" style={{ display: 'block', margin: '20px auto' }} />
        <div className="van-list__finished-text">Tidak ada data</div>
        <div className="van-list__placeholder" />
      </div>
    )
  } else if (isNaN(+props.menu)) {
    return ''
  } else if (props.nonShow === false) {
    return (
      <div data-v-65641047 role="feed" className="van-list">
        <img data-v-65641047 alt="" src="assets/images/no_data.7d5de33.png" style={{ display: 'block', margin: '20px auto' }} />
        <div className="van-list__finished-text">Tidak ada data</div>
        <div className="van-list__placeholder" />
      </div>
    )
  } else {
    return (
      <div data-v-65641047 role="feed" className="van-list">
        <img data-v-65641047 alt="" src="assets/images/no_data.7d5de33.png" style={{ display: 'block', margin: '20px auto' }} />
        <div className="van-list__finished-text">Tidak ada data</div>
        <div className="van-list__placeholder" />
      </div>
    )
  }
}


export default NonTask
