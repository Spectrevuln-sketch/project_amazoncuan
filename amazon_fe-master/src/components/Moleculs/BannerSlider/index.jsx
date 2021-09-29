import React from 'react'
import { Link } from 'react-router-dom'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// import css Banner
import './banner-slider.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
const BannerSlider = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="img-banner-promo"
    >
      <SwiperSlide>
        <Link to="">
          <img src="/assets/images/bg-1.jpg" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <img src="/assets/images/bg-2.jpg" alt="" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <img src="/assets/images/bg-3.jpg" alt="" />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default BannerSlider
