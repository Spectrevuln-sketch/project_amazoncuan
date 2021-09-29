import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IconContext } from "react-icons";
import { VscTrash } from "react-icons/vsc";
import { FaCcAmazonPay } from "react-icons/fa"
/** Alert Toast */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableUserPendapatan = ({ tab }) => {
  const [penarikanDana, setPenarikanDana] = useState();
  const [DataPenarikan, setDataPenarikan] = useState();
  const history = useHistory();
  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })

  console.log(tab)

  useEffect(() => {
    setTimeout(() => {
      FindUserRequest();
    }, 10)
  });

  const FindUserRequest = async (e) => {
    try {

      if (tab === false || tab === 1) {
        setPenarikanDana('REQUEST')
      }
      if (tab === 2) {
        setPenarikanDana('PENDDING')
      }
      const AllRequest = await api.get(`/get-all-user-request/${penarikanDana}`);
      if (AllRequest.status === 200) {
        if (AllRequest.data.length > 0) {
          setDataPenarikan(AllRequest.data)
        }
      }
    } catch (err) {
      console.log(err.response)
      if (err.response.status === 404) {
        console.log(err.response.data.message)
      }
      if (err.response.status === 401) {
        await toast(`🚶 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        await history.push('/');
      }
    }
  }




  return (
    <>
      <div className="tab-content" id="orders-table-tab-content">
        <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                {/* data Task Here */}
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">No Tlp</th>
                      <th className="cell">ATN</th>
                      <th className="cell">Kode Unik</th>
                      <th className="cell">Jabatan</th>
                      <th className="cell">Rekening</th>
                      <th className="cell">Saldo Topup</th>
                      <th className="cell">Pendapatan</th>
                      <th className="cell">Jumlah Penarikan</th>
                      <th className="cell">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataPenarikan && (

                      DataPenarikan.map(penarikan => {
                        if (penarikan.status_transaksi === 'REQUEST') {

                          <tr>
                            <td className="cell">{penarikan.no_tlp}</td>
                            <td className="cell"><span className="truncate">{penarikan.nama_user}</span></td>
                            <td className="cell">{penarikan.kode_akun}</td>
                            <td className="cell">{penarikan.member === 0 ? 'VIP0' : penarikan.member === 1 ? 'VIP1' : penarikan.member === 2 ? 'VIP2' : penarikan.member === 3 ? 'VIP3' : penarikan.member === 4 ? 'VIP4' : ''}</td>
                            <td className="cell">{penarikan.rekening}</td>
                            <td className="cell">{penarikan.saldo_topup}</td>
                            <td className="cell">{penarikan.pendapatan}</td>
                            <td className="cell">{penarikan.jumlah_penarikan}</td>
                            <td className="cell">
                              <Link to="#" className="btn btn-sm btn-danger" style={{ color: "white" }}>
                                <IconContext.Provider value={{ color: "white", size: "15px" }}>
                                  <span>
                                    <VscTrash />
                                  </span>
                                </IconContext.Provider>
                              </Link>
                              <Link to="#" className="btn btn-sm btn-primary" style={{ color: "white", marginLeft: "5px" }}>
                                <IconContext.Provider value={{ color: "white", size: "15px" }}>
                                  <span>
                                    <FaCcAmazonPay />
                                  </span>
                                </IconContext.Provider>
                              </Link>
                            </td>
                          </tr>

                        }
                      }
                      )
                    )}

                  </tbody>
                </table>
                {!DataPenarikan && (
                  <span style={{ margin: "auto" }} algin="center">Tidak Ada Data</span>
                )}
              </div>{/*//table-responsive*/}
            </div>{/*//app-card-body*/}
          </div>
          <nav className="app-pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>{/*//app-pagination*/}
        </div>{/*//tab-pane*/}

        <div className="tab-pane fade" id="orders-pending" role="tabpanel" aria-labelledby="orders-pending-tab">
          <div className="app-card app-card-orders-table mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">No Tlp</th>
                      <th className="cell">ATN</th>
                      <th className="cell">Kode Unik</th>
                      <th className="cell">Jabatan</th>
                      <th className="cell">Rekening</th>
                      <th className="cell">Saldo Topup</th>
                      <th className="cell">Pendapatan</th>
                      <th className="cell">Jumlah Penarikan</th>
                      <th className="cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataPenarikan && (
                      DataPenarikan.map(penarikan => {
                        if (penarikan.status_transaksi === 'BERHASIL') {


                          <tr>
                            <td className="cell">{penarikan.no_tlp}</td>
                            <td className="cell"><span className="truncate">{penarikan.nama_user}</span></td>
                            <td className="cell">{penarikan.kode_akun}</td>
                            <td className="cell">{penarikan.member === 0 ? 'VIP0' : penarikan.member === 1 ? 'VIP1' : penarikan.member === 2 ? 'VIP2' : penarikan.member === 3 ? 'VIP3' : penarikan.member === 4 ? 'VIP4' : ''}</td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell">
                              <div className="badge  bg-success">Berhasil</div>
                            </td>
                          </tr>
                        }
                      }
                      )
                    )}

                  </tbody>
                </table>
                {!DataPenarikan && (
                  <div style={{ margin: "auto" }} algin="center">Tidak Ada Data</div>
                )}
              </div>{/*//table-responsive*/}
            </div>{/*//app-card-body*/}
          </div>{/*//app-card*/}
        </div>{/*//tab-pane*/}
        <div className="tab-pane fade" id="orders-cancelled" role="tabpanel" aria-labelledby="orders-cancelled-tab">
          <div className="app-card app-card-orders-table mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">No Tlp</th>
                      <th className="cell">ATN</th>
                      <th className="cell">Kode Unik</th>
                      <th className="cell">Jabatan</th>
                      <th className="cell">Rekening</th>
                      <th className="cell">Saldo Topup</th>
                      <th className="cell">Pendapatan</th>
                      <th className="cell">Jumlah Penarikan</th>
                      <th className="cell">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataPenarikan && (
                      DataPenarikan.map(penarikan => {
                        if (penarikan.status_transaksi === 'GAGAL') {


                          <tr>
                            <td className="cell">{penarikan.no_tlp}</td>
                            <td className="cell"><span className="truncate">{penarikan.nama_user}</span></td>
                            <td className="cell">{penarikan.kode_akun}</td>
                            <td className="cell">{penarikan.member === 0 ? 'VIP0' : penarikan.member === 1 ? 'VIP1' : penarikan.member === 2 ? 'VIP2' : penarikan.member === 3 ? 'VIP3' : penarikan.member === 4 ? 'VIP4' : ''}</td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell"></td>
                            <td className="cell">
                              <div className="badge  bg-success">{penarikan.status_transaksi}</div>
                            </td>
                          </tr>
                        }
                      }
                      )
                    )}

                  </tbody>
                </table>
                {!DataPenarikan && (
                  <div style={{ margin: "auto" }} algin="center">Tidak Ada Data</div>
                )}
              </div>{/*//table-responsive*/}
            </div>{/*//app-card-body*/}
          </div>{/*//app-card*/}
        </div>{/*//tab-pane*/}
      </div>
    </>
  )
}

export default TableUserPendapatan
