import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
/* Material UI */
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
/* Additional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
import Cookies from 'universal-cookie';
import AllTugasContext from '../../../context/AllTugasContext';
import UserContext from '../../../context/CurrentUserContext';
// impoprt Context Tugas
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


const TaskLevelContent = () => {
  const { UserData } = useContext(UserContext);
  const { allTask } = useContext(AllTugasContext);
  const cookie = new Cookies();
  var [VipData, setVipData] = useState([])
  var [modal, setModal] = useState();
  var history = useHistory();
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()

  /* Modal Requierd */
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    GetAllVip()
  }, [])



  /** Find All VIP */
  const GetAllVip = async () => {
    const AllVip = await axiosInstnce.get('/get-all-vip-level');
    setVipData(AllVip.data);
  }
  /** End Find All VIP */

  /** Modal Konfrim */
  const OnSubmitVIP = async (data) => {
    if (UserData.member === null || UserData.member !== data) {
      history.push('/vip')
    } else {
      history.push(`/taskList/${data}`)
    }
  }
  /** End Modal Konfrim */

  /**modal */
  const ModalVip = async (props) => {
    handleOpen();
    setModal(
      <>
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
              <p id="transition-modal-description" style={{ marginTop: "10px", fontSize: '15px' }}>Kelas anda saat ini general
                hanya bisa mendapatgeneraltugas level<br />
                Adakah anda ingin ikut serta VIP level
              </p>
              <div style={{ borderTop: '1px solid #bbb', marginTop: '20px' }}>
                <button style={{ color: 'darkblue', marginTop: '10px', fontSize: '15px' }} onClick={() => OnSubmitVIP(props)}>Konfrimasi</button>
              </div>
            </div>
          </Fade>
        </Modal>
        {/* End Modal VIP */}
      </>
    )
  }
  /**End modal */

  /* End Modal Requierd */




  return (
    <div className="van-tabs__content font-task-small">
      <div data-v-9b593c8e role="tabpanel" className="van-tab__pane font-task-small" style={{}}>
        <div data-v-9b593c8e>
          <div data-v-9b593c8e className="van-grid">
            {/* Fist Element */}
            {VipData.length > 0 && (
              VipData.map(vip => {
                if (vip.vip_name !== 'VIP0') {

                  return (
                    <div data-v-9b593c8e className="van-grid-item" style={{ flexBasis: "50%" }}>
                      <Link to="#" onClick={() => ModalVip(vip.vip_name)}>
                        <div className="van-grid-item__content van-grid-item__content--center">
                          <div data-v-9b593c8e className="grade-content" style={{ background: `url(assets/icon/vip_new_bg.3c1e8768.png) 55px center no-repeat, ${vip.color_block}` }}>
                            <div data-v-9b593c8e className="cell-title">
                              <span data-v-9b593c8e className="font-task-medium">{vip.vip_name}</span>
                            </div>
                            <div data-v-9b593c8e className="cell-number">
                              <span data-v-9b593c8e>Tugas harian:{vip.tugas_per_hari}kali</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
                if (vip.vip_name === 'VIP0') {

                  return (
                    <div data-v-9b593c8e className="van-grid-item" style={{ flexBasis: "50%" }}>
                      <Link to="#" onClick={() => OnSubmitVIP(vip.vip_name)}>
                        <div className="van-grid-item__content van-grid-item__content--center">
                          <div data-v-9b593c8e className="grade-content" style={{ background: `url(assets/icon/vip_new_bg.3c1e8768.png) 55px center no-repeat, ${vip.color_block}` }}>
                            <div data-v-9b593c8e className="cell-title">
                              <span data-v-9b593c8e className="font-task-medium">{vip.vip_name}</span>
                            </div>
                            <div data-v-9b593c8e className="cell-number">
                              <span data-v-9b593c8e>Tugas harian:{vip.tugas_per_hari}kali</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              })
            )}

          </div>
        </div>
      </div>
      {/* End Fist Element */}

      {/* Modal VIP */}

      {modal}
      <div data-v-9b593c8e role="tabpanel" className="van-tab__pane" style={{ display: "none" }}>

      </div>
      <div data-v-9b593c8e role="tabpanel" className="van-tab__pane" style={{ display: "none" }}></div>
    </div>


  )
}

export default TaskLevelContent
