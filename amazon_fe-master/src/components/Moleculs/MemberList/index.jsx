import React, { useState, useEffect } from 'react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
// import Bootstrap
import { Row, Col } from 'reactstrap';

// icon Atoms
import { IconContext } from "react-icons";
import { RiUserLine } from "react-icons/ri";

// import Style
import './member-list.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import Axios
import axios from 'axios';


const MemberList = () => {
  var [showMember, setMember] = useState();
  var [showPedagang, setPedagang] = useState();
  var [showActive, setActive] = useState(0);
  const [UserData, setUserData] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  useEffect(() => {
    GetCurrentTugas();
  }, [])

  const GetCurrentTugas = async () => {
    let TugasUserData = await axiosInstnce.get('/all-user-tugas');
    console.log(TugasUserData.data);
    setUserData(TugasUserData.data);
  }

  const Member = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    setActive(2)
    if (UserData)
      setMember(

        <Swiper
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          direction={'vertical'}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          data-v-18d0403e
          className="van-swipe" id="SwipeList1"
        >

          {/* Show Notifications */}
          <div className="van-swipe__track" style={{ transitionDuration: "500ms", transform: "translateY(-1632px)", height: "1768px" }}>

            <SwiperSlide id="amazon-bg-silver" className="van-tab--swipe-member">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

              <img src="assets/head/head_8.png" className="img-swiper-react" alt="" />

              <div className="van-cell__title font-small">
                <span >Selamat:***5046</span>
                <div className="van-cell__label font-small">Selesai25tugas,dan untung300000!</div>
              </div>
            </SwiperSlide>


          </div>

          {/* End Show Notifications */}


        </Swiper>
      )
  }


  const Pedagang = () => {
    setActive(1)
    setPedagang(

      <Swiper
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        direction={'vertical'}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

        className="van-swipe" id="SwipeList1"
      >

        {/* Show Notifications */}
        <div className="van-swipe__track" style={{ transitionDuration: "500ms", transform: "translateY(-1632px)", height: "1768px" }}>


          { }
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}
          {/* Slider Content */}
          <SwiperSlide className="van-tab--swipe-member" id="amazon-bg-silver">

            <img src="assets/head/head_7.png" className="img-swiper-react" alt="" />

            <div className="van-cell__title font-small">
              <span className="font-small">****1064</span>
              <div className="van-cell__label font-small">Hari ini rilis53tugas</div>
            </div>
            <Row className="profit-section">
              <Col sm xs={6}>
                <img src="assets/icon/gold.png" className="profit-image" alt="" />
              </Col>
              <Col sm xs={6}>
                <p className="profit-avarage">1060</p>
              </Col>
            </Row>
          </SwiperSlide>
          {/* End Slider Content */}





        </div>

        {/* End Show Notifications */}


      </Swiper>
    )
  }



  return (
    <div>
      {/* Member List */}
      <div data-v-18d0403e className="MemberList van-tabs van-tabs--card">
        <div className="van-tabs__wrap">
          <div role="tablist" className="van-tabs__nav van-tabs__nav--card" style={{ background: "transparent", border: "none" }}>
            <div role="tab" onClick={Member} className={showActive == 2 ? 'van-on van-tab--active' : ''} style={{ backgroundRepeat: "no-repeat", margin: "auto" }}>
              <span className="van-tab__text van-tab__text--ellipsis" style={{ padding: "5px 10px", backgroundRepeat: "no-repeat" }}>
                <FontAwesomeIcon icon={faUserTie} style={{ fontSize: "20px", color: "#D5BE2D" }}>

                </FontAwesomeIcon>
                <p style={{ padding: "0 0 0 10px", fontSize: "small" }} className="tab-section">Daftar anggota</p>
              </span>
            </div>
            <div role="tab" onClick={Pedagang} style={{ backgroundRepeat: "no-repeat", margin: "auto" }} className={showActive == 1 ? 'van-on van-tab--active' : ''}>
              <span className="van-tab__text van-tab__text--ellipsis " style={{ padding: "5px ", backgroundRepeat: "no-repeat" }}>
                <RiUserLine style={{ fontSize: "20px", color: "#D5BE2D" }} />
                <p style={{ padding: "0 0 0 10px", fontSize: "small" }} className="tab-section">Daftar pedagang</p>
              </span>
            </div>
          </div>
        </div>
        {showActive == 2 ? showMember : showPedagang}
      </div>
      {/* End Member List */}
    </div>
  )
}

export default MemberList
