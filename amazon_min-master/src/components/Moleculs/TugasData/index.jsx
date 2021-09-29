import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// components
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { MainInput, DropDownInput } from '../../../components';
// End components
// ColorPicker
import { CompactPicker } from 'react-color';
// End Color Picker
import { IconContext } from "react-icons";
import { VscTrash } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri"
/** Alert Toast */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/** Get Context*/
import AllVipLevel from '../../../context/AllVipLevel';
import GetAllTugas from '../../../context/TugasContext';
const TugasData = ({ tab }) => {
  // Get State Context
  const { vipData } = useContext(AllVipLevel);
  const { AllTugas } = useContext(GetAllTugas);
  // End Get State Context
  const [dataTask, setDataTask] = useState([]);
  const [noData, setNoData] = useState([]);
  const [title_kategori, setTitleKategori] = useState([]);

  const [vendor_icon, setIconVendor] = useState('');
  const [ImageFile, setImageFile] = useState([]);
  const [ImageSrc, setImageSrc] = useState([]);
  const [ImageName, setImageName] = useState([]);
  /** vip State */
  const [namaVip, setNamaVip] = useState('');
  const [Durasi, setDurasiTugas] = useState('');
  const [per_pesanan, setPerPesanan] = useState('');
  const [per_hari, setPerHari] = useState('');
  const [per_bulan, setPerBulan] = useState('');
  const [per_tahun, setPerTahun] = useState('');
  const [harga_vip, setHargaVip] = useState('');
  /** End vip State */

  const history = useHistory();
  /**ColorPicker State */
  const [defaultColor, setColor] = useState(['#FCC400'])
  const ChangeColor = async (color) => {
    setColor(color.hex)
  }
  /**End ColorPicker State */

  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })
  useEffect(() => {
    FindAllTask();


  }, []);

  console.log(defaultColor)
  const ColorPicker = () => {
    return (
      <div className="mb-4 fw-bold text-capitalize">
        <div>
          <h6 className="fw-bold">Color For Vip Block</h6>
        </div>
        <CompactPicker
          color={defaultColor}
          onChangeComplete={ChangeColor}
        />
      </div>
    )
  }


  /** Create New Daftar Tugas */
  const CreateDaftarTugas = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title_kategori', title_kategori);
      formData.append('icon_kategori', ImageFile);
      console.log(formData)
      const CreateVendorTugas = await api.post('/create-daftar-vendor-task', formData)
      if (CreateVendorTugas.status === 200) {
        await toast(`🥂 ${CreateVendorTugas.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        window.location.reload();
      }
    } catch (err) {
      if (err.response.status === 409) {
        const ValidateMsg = err.response.data.message;
        ValidateMsg.map(errMsg => {
          toast(`😥 ${errMsg.msg}`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
      }
      if (err.response.status === 500) {
        toast(`😥 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      if (err.response.status === 404) {
        toast(`😥 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      if (err.response.status === 401) {
        toast(`😥 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        history.push('/');
      }
    }
  }
  /** End Create New Daftar Tugas */

  /** Create Vip */
  const CreateVip = async (e) => {
    try {
      e.preventDefault();
      const InsertVip = await api.post('/create-new-vip', {
        vip_name: namaVip.toUpperCase(),
        per_pesanan: per_pesanan,
        per_bulan: per_bulan,
        per_hari: per_hari,
        per_tahun: per_tahun,
        harga_vip: harga_vip,
        tugas_per_hari: Durasi,
        color_block: defaultColor
      });
      if (InsertVip.status === 200) {
        await toast(`🥂 ${InsertVip.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        window.location.reload()
      }

    } catch (err) {
      if (err.response.status === 409) {
        toast(`😥 ${err.response.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      if (err.response.status === 404) {
        const ValidateMsg = err.response.data.message;
        ValidateMsg.map(errMsg => {
          toast(`😥 ${errMsg.msg}`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
      }

    }
  }
  /** End Create Vip */



  const FindAllTask = async () => {
    try {
      const TaskData = await api.get('/get-allTugas');
      if (TaskData.data.length > 0 && TaskData.status === 200) {
        setDataTask(TaskData.data);
      }
    } catch (err) {
      if (err.response.status === 404) {
        setNoData(err.response.message)
      }
    }
  }

  /* Edit Tugas */
  const EditTugas = (id) => {
    history.push(`/editTugas/${id}`)
  }

  /**Delete Tugas */
  const DeleteTask = async (id) => {
    console.log(id)
    try {

      const DeleteTask = await api.post('/delete-tugas', {
        id
      })
      if (DeleteTask.status === 200) {
        window.location.reload();
        await toast(`🗑️ ${DeleteTask.data.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (err) {
      const ErrData = err.response.data;
      const ErrCode = err.response.status;
      if (ErrCode === 401) {
        await toast(`✋ ${ErrData.message}`, {
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

  /**Handle Redirect */
  const HandleRedirect = async () => {
    if (vipData.data.length > 0 && AllTugas.length > 0) {
      await history.push('/create_tugas');
    } else {
      window.location.reload(false);
      await toast(`🤚 Silahkan Tambah Terlebih Dahulu Vip dan Daftar Tugas`, {
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
  /**End Handle Redirect */


  /** File Upload Icon */

  const getImage = (e) => {
    if (e.target.files[0] === undefined) {
      throw console.error("No File")
    } else {
      setImageFile(e.target.files[0])
      setImageSrc(URL.createObjectURL(e.target.files[0]))
      setImageName(e.target.files[0].name)
    }
  }
  /** End File Upload Icon */

  return (
    <>
      <div className="tab-content" id="orders-table-tab-content">
        {/* Tab False */}
        {tab === false && (
          <div className="tab-pane fade show active" id="daftar-tugas" role="tabpanel" aria-labelledby="daftar-tugas-tab">
            <div className="app-card app-card-settings shadow-sm p-4">
              <div className="app-card-body">
                <Form className="settings-form" onSubmit={CreateDaftarTugas}>

                  <MainInput type="text" label="Title Kategori" className="form-control" id="title_kategori" name="title_kategori" onChange={e => setTitleKategori(e.target.value)} />

                  <MainInput type="file" label="Upload Icon Vendor" className="form-control" id="icon_kategori" name="icon_kategori" onChange={getImage} />

                  <Button type="submit" color="primary" style={{ color: 'white' }}>Save Changes</Button>
                </Form>
              </div>{/*//app-card-body*/}
            </div>{/*//app-card*/}
          </div>
        )}
        {/* End Tab False */}
        {/* Tab 2 */}
        {tab === 2 && (
          <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">

            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <Button color="success" style={{ color: 'white', marginBottom: "20px" }} onClick={HandleRedirect}>Tambah Tugas Baru</Button>
              </div>
            </div>
            <div className="app-card app-card-orders-table shadow-sm mb-5">
              <div className="app-card-body">
                <div className="table-responsive">
                  {/* data Task Here */}
                  <table className="table app-table-hover mb-0 text-left">
                    <thead>
                      <tr>
                        <th className="cell">Kategori Tugas</th>
                        <th className="cell">Link Tugas</th>
                        <th className="cell">Kode Unik</th>
                        <th className="cell">No Tlp Pedagang</th>
                        <th className="cell">Judul</th>
                        <th className="cell">Bayaran</th>
                        <th className="cell">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTask.map(task => {
                        return (

                          <tr>
                            <td className="cell">{task.kategori_tugas}</td>
                            <td className="cell"><span className="truncate">{task.link_tugas}</span></td>
                            <td className="cell">{task.unique_code}</td>
                            <td className="cell">{task.no_tlp_pedagang}</td>
                            <td className="cell">{task.judul_tugas}</td>
                            <td className="cell">{task.cost_task}</td>
                            <td className="cell">
                              <Link to="#" className="btn btn-sm btn-danger" style={{ color: "white" }} onClick={() => DeleteTask(task.id)}>
                                <IconContext.Provider value={{ color: "white", size: "15px" }}>
                                  <span>
                                    <VscTrash />
                                  </span>
                                </IconContext.Provider>
                              </Link>
                              <Link to="#" className="btn btn-sm btn-warning" style={{ color: "white", marginLeft: "5px" }} onClick={() => EditTugas(task.id)}>
                                <IconContext.Provider value={{ color: "white", size: "15px" }}>
                                  <span>
                                    <RiEdit2Line />
                                  </span>
                                </IconContext.Provider>
                              </Link>
                            </td>
                          </tr>

                        )
                      })}
                    </tbody>
                  </table>
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
          </div>
        )}
        {/* End tab 2 */}
        {/* Tab 3 */}
        {tab === 6 && (

          <div className="tab-pane fade show active" id="daftar-tugas" role="tabpanel" aria-labelledby="daftar-tugas-tab">
            <div className="app-card app-card-settings shadow-sm p-4">
              <div className="app-card-body">
                <Form className="settings-form" onSubmit={CreateVip}>

                  <MainInput type="text" label="Input Nama Vip" className="form-control" id="vip_name" name="vip_name" onChange={e => setNamaVip(e.target.value)} />

                  <MainInput type="text" label="Harga VIP" className="form-control" id="harga_vip" name="harga_vip" onChange={e => setHargaVip(e.target.value)} />

                  <MainInput type="text" label="Input Per Satukali Pesanan" className="form-control" id="per_pesanan" name="per_pesanan" onChange={e => setPerPesanan(e.target.value)} />

                  <MainInput type="text" label="Input Per hari Pesanan" className="form-control" id="per_hari" name="per_hari" onChange={e => setPerHari(e.target.value)} />

                  <MainInput type="text" label="Input Per Bulan Pesanan" className="form-control" id="per_bulan" name="per_bulan" onChange={e => setPerBulan(e.target.value)} />

                  <MainInput type="text" label="Input Per Tahun Pesanan" className="form-control" id="per_tahun" name="per_tahun" onChange={e => setPerTahun(e.target.value)} />

                  <MainInput type="number" label="Input Tugas Perhari" className="form-control" id="tugas_per_hari" name="tugas_per_hari" onChange={e => setDurasiTugas(e.target.value)} />
                  <ColorPicker />
                  <Button type="submit" color="primary" style={{ color: 'white' }}>Save Changes</Button>
                </Form>
              </div>{/*//app-card-body*/}
            </div>{/*//app-card*/}
          </div>
        )}
        {tab === 3 && (

          <div className="tab-pane fade show active" id="daftar-tugas" role="tabpanel" aria-labelledby="daftar-tugas-tab">
            <div className="app-card app-card-orders-table shadow-sm mb-5">
              <div className="app-card-body">
                <div className="table-responsive">
                  {/*  */}

                </div>
              </div>
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
          </div>
        )}
        {/* End tab 3  */}
        {tab === 4 && (

          <div className="tab-pane fade show active" id="daftar-tugas" role="tabpanel" aria-labelledby="daftar-tugas-tab">
            <div className="app-card app-card-orders-table shadow-sm mb-5">
              <div className="app-card-body">
                <div className="table-responsive">
                  {/*  */}

                </div>
              </div>
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
          </div>
        )}

      </div>
    </>
  )
}

export default TugasData
