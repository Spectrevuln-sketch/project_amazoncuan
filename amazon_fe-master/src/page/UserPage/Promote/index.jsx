import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useAlert } from 'react-alert'
import QRCode from 'qrcode'
import { useHistory } from 'react-router-dom';
import copy from "copy-to-clipboard";
import Cookies from 'universal-cookie';
const Promote = () => {
  const cookie = new Cookies();
  const [src, setSRC] = useState('');
  const [Userdata, setUserData] = useState([]);
  const [copyText, setCopyText] = useState('');
  const [copyLink, setCopyLink] = useState('');
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert();
  const history = useHistory();


  useEffect(() => {
    var tokenData = cookie.get('token', { path: '/', expires: 'session', httpOnly: true });
    UserCurrent(tokenData);
    QRgen();
    textCopy();
    LinkCopy();
  }, [])

  const textCopy = () => {
    // const kodeAkun = document.getElementById('IosCode').innerText
    setCopyText(Userdata.kode_akun)
  }
  const LinkCopy = () => {
    const kodeAkun = document.getElementsByTagName('div')[13].getAttribute('title')
    console.log(kodeAkun)
    setCopyLink(kodeAkun)

  }
  const QRgen = () => {
    QRCode.toDataURL(window.location.origin + '/register?kode_akun=' + Userdata.kode_akun, (err, url) => {
      setSRC(url)
    })
  }

  const copyToClipboard = () => {

    copy(Userdata.kode_akun);
    alert.success(`You have copied`);
  }

  const CopyLink = () => {

    copy(window.location.origin + '/register?kode_akun=' + Userdata.kode_akun);
    alert.success(`You have copied`);
  }


  /* Call User Data */
  const UserCurrent = (tokenData) => {

    axiosInstnce.get('/current_user', {
      params: {

        token: tokenData,
      }
    }).then(res => {
      if (res.data.status === 200) {
        setUserData(res.data.data_user)
      }
    }).catch(err => {
      console.error(err)
    })
  }
  /* End Call User Data */



  return (
    <div data-v-ebf933f6>
      <div data-v-579d5920 data-v-ebf933f6 className="Site ScrollBox promote">
        <div data-v-579d5920 className="van-nav-bar van-nav-bar--fixed">
          <div className="van-nav-bar__content">
            <div className="van-nav-bar__left">
              <i className="van-icon van-icon-arrow-left van-nav-bar__arrow">
              </i>
            </div>
            <div className="van-nav-bar__title van-ellipsis" />
          </div>
        </div>
        <img data-v-579d5920 src="assets/images/share-EN.png" style={{ width: '100%', height: '110vh' }} alt="share-akun" />
        <div data-v-579d5920 className="PromoteInfo">
          <div data-v-579d5920>
            <div data-v-579d5920 style={{ backgroundColor: 'rgb(18, 50, 75)', width: '100%', padding: '15px', boxSizing: 'border-box' }}>
              <h4 data-v-579d5920>Teman Anda {Userdata.no_tlp}</h4>
              <h4 data-v-579d5920>Mengundang anda untuk ikut sertamore like</h4>
              <div data-v-579d5920 id="QRCode" />
              <h4 data-v-579d5920 className="m0">Kode rujukan：<span data-v-579d5920 id="IosCode">{Userdata.kode_akun}</span></h4>
              <div data-v-579d5920 className="copy" onClick={copyToClipboard}>
                <i data-v-579d5920 className="van-icon van-icon-description">
                </i>
                Salin kode rujukan
              </div>
              <div data-v-579d5920 id="qrcode" className="qrcode" title={window.location.origin + '?kode_akun=' + Userdata.kode_akun}>
                <img src={src} alt="qr-code" />
              </div>
              <div data-v-579d5920 id="url_qr">{window.location.origin + '?kode_akun=' + Userdata.kode_akun}</div>
              <div data-v-579d5920 className="copy" onClick={CopyLink}>
                <i data-v-579d5920 className="van-icon van-icon-description">
                  {/**/}
                </i>
                Salin tautan undangan
              </div>
            </div>
            {/* <div data-v-579d5920 style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <button data-v-579d5920 className="van-button van-button--default van-button--normal van-button--block" style={{ fontSize: '16px', background: 'transparent', color: 'rgb(255, 255, 255)', marginRight: '8px' }}>
                <div data-v-579d5920 className="van-button__content"><span data-v-579d5920 className="van-button__text">Simpan kode QR</span></div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promote
