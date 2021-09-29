import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { VscTrash } from "react-icons/vsc";
import { FaCcAmazonPay } from "react-icons/fa"
/** Alert Toast */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableTopupUser = ({ tab }) => {
    const [userRequestTopup, setUserRequestTopup] = useState([]);
    const [checker, setChecker] = useState(false);
    const history = useHistory();
    var api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true
    })

    useEffect(() => {
        FindUserTopup();
    }, [])

    const FindUserTopup = async () => {
        try {
            const UserTopup = await api.get('/get-all-user-topup');
            console.log(UserTopup)
            if (UserTopup.status === 200) {
                setUserRequestTopup(UserTopup.data)
            }

        } catch (err) {
            if (err.response.status === 400) {
                await toast(`Belum Ada Permintaan Topup`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            }
        }
    }

    return (
        <>
            <div className="tab-content" id="orders-table-tab-content">
                {/* Tab Topup Request */}
                <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                    <div className="app-card app-card-orders-table mb-5">
                        <div className="app-card-body">
                            <div className="table-responsive">
                                <table className="table app-table-hover mb-0 text-left">
                                    <thead>
                                        <tr>
                                            <th className="cell">No Tlp</th>
                                            <th className="cell">ATN</th>
                                            <th className="cell">Email</th>
                                            <th className="cell">Kode Unik</th>
                                            <th className="cell">Bank</th>
                                            <th className="cell">Rekening</th>
                                            <th className="cell">Saldo Topup</th>
                                            <th className="cell">Status</th>
                                            <th className="cell">Ubah Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userRequestTopup && (

                                            userRequestTopup.map(topup => {
                                                return (

                                                    <tr>
                                                        <td className="cell">{topup.nomor_tlp_pelanggan}</td>
                                                        <td className="cell"><span className="truncate">{topup.nama_pelanggan}</span></td>
                                                        <td className="cell">{topup.email_pelanggan}</td>
                                                        <td className="cell">{topup.kode_member}</td>
                                                        <td className="cell">{topup.nama_bank}</td>
                                                        <td className="cell">{topup.rekening_bank}</td>
                                                        <td className="cell">{topup.total_topup_self}</td>
                                                        <td className="cell">
                                                            {topup.status_self_pay === null ? <div className="badge  bg-warning">Pending</div> : <div className="badge  bg-success">{topup.status_self_pay}</div>}
                                                        </td>
                                                        <td className="cell">
                                                            <div class="form-check form-switch">
                                                                {checker == true && (
                                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={e => setChecker(true)} checked />
                                                                )}
                                                                {checker == false && (
                                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={e => setChecker(true)} />
                                                                )

                                                                }
                                                                <label class="form-check-label" for="flexSwitchCheckChecked">Ubah Status</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        )}
                                    </tbody>
                                </table>
                                {userRequestTopup.length <= 0 && (
                                    <div style={{ margin: "auto" }} className="text-center fw-bold text-danger">Tidak Ada Data</div>
                                )}
                            </div>{/*//table-responsive*/}
                        </div>{/*//app-card-body*/}
                    </div>{/*//app-card*/}
                </div>{/*//tab-pane*/}
                {/* Tab Berhasil */}
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
                                        <tr>
                                            <td className="cell"></td>
                                            <td className="cell"><span className="truncate"></span></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell">
                                                <div className="badge  bg-success">Berhasil</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div style={{ margin: "auto" }} algin="center">Tidak Ada Data</div> */}
                            </div>{/*//table-responsive*/}
                        </div>{/*//app-card-body*/}
                    </div>{/*//app-card*/}
                </div>{/*//tab-pane*/}
                {/* TAB CANCLE */}
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
                                        <tr>
                                            <td className="cell"></td>
                                            <td className="cell"><span className="truncate"></span></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell"></td>
                                            <td className="cell">
                                                <div className="badge  bg-success">Berhasil</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div style={{ margin: "auto" }} algin="center">Tidak Ada Data</div> */}
                            </div>{/*//table-responsive*/}
                        </div>{/*//app-card-body*/}
                    </div>{/*//app-card*/}
                </div>{/*//tab-pane*/}
            </div>
        </>
    )
}

export default TableTopupUser
