import React, { useState, useEffect } from 'react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
// import bootstrap
import { Col, Row } from 'reactstrap';
import axios from 'axios';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


const NotificationSlider = () => {
  const [UserData, setUserData] = useState([]);
  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })

  useEffect(() => {
    FindAllUser();
  }, [])

  const FindAllUser = async () => {
    let ApiUserData = await api.get('/get-all-user');
    console.log(ApiUserData);
  }


  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


  return (
    <Row>
      <Col sm={4}>
        <FontAwesomeIcon data-v-18d0403e icon={faVolumeUp} style={{ color: "rgb(212,175,55)", fontSize: "18px", marginBottom: "-10%", marginLeft: "3%", display: "inline-block" }} />
      </Col>
      <Col sm={8}>
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          direction={'vertical'}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="Broadcast_item" data-v-18d0403e>
          <SwiperSlide data-v-18d0403e style={{ marginLeft: "10%", width: "90%", display: "inline-block", float: "right", fontSize: "smaller" }} >
            <p className="font-small">Selamat kepada ****8547 karena merekomendasikan VIP1 dan mendapatkan hadiah promosi Rp90.000!</p>
          </SwiperSlide>
          <SwiperSlide data-v-18d0403e style={{ marginLeft: "10%", width: "90%", display: "inline-block", float: "right", fontSize: "smaller" }}>
            <p className="font-small">Selamat kepada ****3862 karena merekomendasikan VIP2 dan mendapatkan hadiah promosi Rp180.000!</p>
          </SwiperSlide>
          <SwiperSlide data-v-18d0403e style={{ marginLeft: "10%", width: "90%", display: "inline-block", float: "right", fontSize: "smaller" }}>
            <p className="font-small">Selamat kepada ****3862 karena merekomendasikan VIP2 dan mendapatkan hadiah promosi Rp180.000!</p>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  )
}

export default NotificationSlider
