import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FooterNav, BannerSlider } from '../../../components/Moleculs'
import './vip-page-style.css'
// import React Helmet
import { Helmet } from "react-helmet";
/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
/* End Material UI */
/* Additional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'

import Cookies from 'universal-cookie';
/* End Additional Package */
import GetAllVipCardContext from '../../../context/GetAllVipCard';
import UserContext from '../../../context/CurrentUserContext';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
    textAlign: 'center'
  },
}));
const VIPPage = () => {
  const { UserData } = useContext(UserContext);
  const { VipData } = useContext(GetAllVipCardContext)
  var history = useHistory();
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()

  /* Modal Requierd */
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Level_VIP, setLevel] = useState('');
  const [cost_vip, setCost] = useState('');

  const handleOpen = ({ vip_name, harga_vip }) => {
    setLevel(vip_name)
    setCost(harga_vip)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /* End Modal Requierd */



  const OnSubmitVIP1 = async () => {
    if (UserData) {
      if (UserData.saldo_topup > cost_vip) {
        axiosInstnce.post('/kurangiPendapatan', {
          level: Level_VIP,
          vip_card_price: cost_vip,
          pendapatan_user: UserData.saldo_topup
        })
      } else {
        await history.push('/dompetKu');
      }
    }
  }


  const VIPCard1Dst = () => {
    if (VipData.length > 0) {

      return VipData.map(vip => {

        return (
          <>
            <div data-v-120d3d8b className="van-grid font-vip-small">
              <div data-v-120d3d8b className="van-grid-item" style={{ flexBasis: '100%' }}>
                <div className="van-grid-item__content van-grid-item__content--center">
                  <div data-v-120d3d8b className="grade-content" style={{ background: `url(assets/icon/vip_new_bg.3c1e8768.png) 55px center no-repeat, ${vip.color_block}` }}>
                    <button type="button" onClick={() => handleOpen({ vip_name: vip.vip_name, harga_vip: vip.harga_vip })}>
                      <div data-v-120d3d8b className="cell-title">
                        <span data-v-120d3d8b className="vip-level">
                          {vip.vip_name}
                          <span data-v-120d3d8b className="price-vip" style={{ fontSize: '12px', color: 'rgb(255, 255, 0)' }}>
                            &nbsp;IDR{vip.harga_vip}</span></span>
                      </div>
                      <div data-v-120d3d8b className="cell-number" style={{ marginTop: "-13px", fontSize: '12px' }}>
                        <div data-v-120d3d8b>
                          <div data-v-120d3d8b>
                            Sesuai pesanan:&nbsp;IDR{vip.per_pesanan}
                          </div>
                          <div data-v-120d3d8b>Pendapatan harian:&nbsp;IDR{vip.per_hari}</div>
                          <div data-v-120d3d8b>Pendapatan bulanan:&nbsp;IDR{vip.per_bulan}</div>
                          <div data-v-120d3d8b>Pendapatan tahunan:&nbsp;IDR{vip.per_tahun}</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )

      })
    }
  }




  const VIP0 = () => {

    return (
      <>
        <div data-v-120d3d8b className="van-grid font-vip-small">

          <div data-v-120d3d8b className="van-grid-item" style={{ flexBasis: '100%' }}>
            <div className="van-grid-item__content van-grid-item__content--center">
              <div data-v-120d3d8b className="grade-content" style={{ background: 'url("assets/icon/vip_new_bg.3c1e8768.png") 55px center no-repeat, linear-gradient(60deg, rgb(204, 215, 233), rgb(112, 133, 165))' }}>
                <div data-v-120d3d8b className="cell-title">
                  <span data-v-120d3d8b className="vip-level" >Identitas anda:
                    <span data-v-120d3d8b className="font-vip-small" style={{ color: 'rgb(255, 255, 0)' }}>{UserData.member}</span>
                  </span>
                </div>
                <div data-v-120d3d8b className="cell-number">
                  <div data-v-120d3d8b className="financial">
                    <div data-v-120d3d8b>Tugas harian:3kali</div>
                    <div data-v-120d3d8b>
                      <p data-v-120d3d8b>Permanen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }





  return (
    <div data-v-120d3d8b className="IndexBox Site">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faco | VIP</title>
      </Helmet>
      <FooterNav />
      <BannerSlider />
      {/* Vip 0 */}
      {VipData.length > 0 && (
        <>
          <VIP0 />
          <VIPCard1Dst />
        </>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ fontSize: 'small' }}>
            <h2 id="transition-modal-title">Perhatian</h2>
            <p id="transition-modal-description" style={{ marginTop: "10px", fontSize: '15px' }}>Konfirmasi membayar  menjadi {Level_VIP}?</p>
            <div style={{ borderTop: '1px solid #bbb', marginTop: '20px' }}>
              <button style={{ color: 'darkblue', marginTop: '10px', fontSize: '15px' }} onClick={OnSubmitVIP1}>Konfrimasi</button>
            </div>
          </div>
        </Fade>
      </Modal>
      {/* End Modal VIP1 */}
      <div data-v-120d3d8b className="van-grid" />
      <div data-v-120d3d8b className="van-grid" />
      <div data-v-120d3d8b className="van-grid" />
      <div data-v-120d3d8b className="van-grid" />
      <div data-v-120d3d8b className="van-grid" />
      <div data-v-120d3d8b className="mask" style={{ display: 'none' }} />
      <div data-v-120d3d8b className="dialog" style={{ display: 'none' }}>
        <div data-v-120d3d8b className="dialog-header">Perhatian</div>
        <div data-v-120d3d8b className="dialog-content"><span data-v-120d3d8b style={{ display: 'none' }}>Konfirmasi membayar
          &nbsp;IDR menjadi?</span> <span data-v-120d3d8b style={{ display: 'none' }}>Konfirmasi membayar &nbsp;IDR untuk
            meneruskan?</span></div>
        <div data-v-120d3d8b className="dialog-footer">
          <div data-v-120d3d8b className="cancel">
            Menghapus
          </div>
          <div data-v-120d3d8b className="join">
            Konfirmasi
          </div>
        </div>
      </div>
      <div data-v-120d3d8b className="mask" style={{ display: 'none' }} />
      <div data-v-120d3d8b className="dialog to-recharge" style={{ display: 'none' }}>
        <div data-v-120d3d8b className="dialog-content" style={{ paddingBottom: '10px' }}><span data-v-120d3d8b style={{ lineHeight: '54px' }} />
          <div data-v-120d3d8b className="dialog-footer">
            <div data-v-120d3d8b className="cancel">
              Menghapus
            </div>
            <div data-v-120d3d8b className="join">
              Menambah uang
            </div>
          </div>
        </div>
      </div>
      <form data-v-120d3d8b method="post" id="test_form" name="forms" style={{ opacity: 0 }}><button data-v-120d3d8b id="submitBtn" type="submit" /></form>
      <div data-v-120d3d8b className="box-container" style={{ display: 'none' }}>
        <div data-v-120d3d8b className="content">
          <div data-v-120d3d8b />
          <ul data-v-120d3d8b>
            <li data-v-120d3d8b className="message-cancel">
              kanselahin
            </li>
            <li data-v-120d3d8b className="message-sure">
              Konfirmasi
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default VIPPage
