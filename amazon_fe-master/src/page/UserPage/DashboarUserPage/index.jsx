import React, { useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BannerSlider, NotificationSlider, RuangVip, RuangTugas, RuangPedagang, MemberList, FooterNav } from '../../../components/Moleculs'
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import './dashboard-user.css'
const DashboarUserPage = () => {
  useEffect(() => {
    Cookies.get()
  }, [])
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | Dashboard</title>
      </Helmet>
      <div data-v-18d0403e className="home IndexBox font-small">
        <div data-v-18d0403e className="nav van-nav-bar" style={{ background: "transparent" }}>
          <div className="van-nav-bar__content">
            <div className="van-nav-bar__left">
              <span className="van-nav-bar__text font-small" style={{ color: "white" }}>Ubah rute</span>
            </div>
            <div className="van-nav-bar__title van-ellipsis">
              <img data-v-18d0403e src="assets/images/amazon.jpg" style={{ height: "50px", borderRadius: "20%" }} alt="" />
            </div>
            {/* <div className="van-nav-bar__right">
              <span className="van-nav-bar__text font-small">Pilih bahasa</span>
            </div> */}
          </div>
        </div>
        <BannerSlider />
        <NotificationSlider />
        <RuangVip />
        <div data-v-18d0403e className="promote van-swipe">
          <div className="van-swipe__track" style={{ transitionDuration: "0ms", transform: "translateX(0px)", width: "100%" }}>
            <div data-v-18d0403e className="van-swipe-item" style={{ width: "100%" }}>
              <Link data-v-18d0403e to="">
                <img data-v-18d0403e src="assets/images/amazon.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <RuangTugas />
        <RuangPedagang />
        <MemberList />

        {/* Modal Box */}
        <div className="van-overlay font-small" style={{ Zindex: "2003", display: "none" }}></div>
        <div className="van-popup van-popup--center font-small" style={{ transitionDurationbackground: "transparent", width: "80%", textAlign: "center", Zindex: "2004", display: "none" }}>
          <dl className="NoticePopup">
            <dt >Pengumuman terbaru</dt>
            <dd >
              <p style={{ textAlign: "center" }}>Waktu penarikan harian adalah dari pukul 10:00 hingga 21:00. Jika waktu penarikan terlampaui, maka akan diproses secepatnya pada pukul 10.00 siang keesokan harinya. Kami mohon maaf atas ketidaknyamanan yang Anda alamiWaktu penarikan normal adalah dalam 24 jam</p>
              <p style={{ textAlign: "center" }}>VIP1 diskon 10K</p>
              <p style={{ textAlign: "center" }}>&nbsp;VIP2 diskon 20K</p>
              <p style={{ textAlign: "center" }}>VIP3 diskon 30K</p>
              <p style={{ textAlign: "center" }}>Hak interpretasi akhir milik Fabulous</p>
            </dd>
          </dl>
          <Link to="#" className="close">
          </Link>
        </div>
        {/* End Modal Box */}
        {/* FooterNav */}
        <FooterNav />
      </div>
    </Container>

  )
}

export default DashboarUserPage
