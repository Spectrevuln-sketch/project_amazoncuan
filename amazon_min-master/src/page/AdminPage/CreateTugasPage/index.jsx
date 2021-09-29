import axios from 'axios';
import { useHistory } from 'react-router'
import React, { useEffect, useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { MainInput, DropDownInput } from '../../../components';

/** Alert Toast */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/** Get Context*/
import AllVipLevel from '../../../context/AllVipLevel';
const CreateTugasPage = () => {
  const { vipData } = useContext(AllVipLevel);
  const [image_tugas, setImageFile] = useState('');
  const [image_name, setImageName] = useState('');
  const [imageSrc, setImageSrc] = useState(undefined);
  const [judul_tugas, setJudulTugas] = useState('');
  const [kategori_tugas, setKategori] = useState('');
  const [no_tlp_pedagang, setNoTlp] = useState('');
  const [cost_task, setCost] = useState('');
  const [deskripsi_tugas, setDeskripsi] = useState('');
  const [misi_tugas, setMisiTugas] = useState('');
  const [link_tugas, setLinkTugas] = useState('');
  const [daftarTugas, setDaftarTugas] = useState([]);

  const history = useHistory();
  var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
  })

  useEffect(() => {
    GetDaftarTugas();
  }, [])


  /**Get Data Tugas */
  const GetDaftarTugas = async () => {
    try {
      const DaftarTugas = await api.get('/daftar-tugas');
      if (DaftarTugas.status === 200) {
        setDaftarTugas(DaftarTugas.data);
      }
    } catch (err) {
      if (err.response) {

        if (err.response.status === 404) {
          console.log(err.response.data.message);
        }
        if (err.response.status === 401) {
          console.log(err.response.data.message);
          history.push('/')
        }
      }
    }
  }



  /* insert Tugas Baru */
  const SubmitNewTask = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      if (image_tugas !== '') {
        formData.append('image_tugas', image_tugas);
        formData.append('judul_tugas', judul_tugas);
        formData.append('kategori_tugas', kategori_tugas);
        formData.append('link_tugas', link_tugas);
        formData.append('no_tlp_pedagang', no_tlp_pedagang);
        formData.append('cost_task', cost_task);
        formData.append('deskripsi_tugas', deskripsi_tugas);
        formData.append('misi_tugas', misi_tugas);
        const CreateTaskData = await api.post('/create-new-task', formData);
        if (CreateTaskData.status === 200) {
          await toast(`📖 ${CreateTaskData.data.message}`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          history.push("/tugasManagement");
        }
      }
    } catch (err) {
      var ErrorData = err.response.data;
      var ErrCode = err.response.status;
      if (err.response.status === 400) {
        await toast.error(`😔 ${ErrorData.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      if (ErrCode === 501) {
        await toast.error(`😔 ${ErrorData.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      }
      if (ErrCode === 502) {
        await toast.error(`😔 ${ErrorData.message}`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      }
      if (ErrCode === 404) {
        await toast.error(`😔 ${ErrorData.message}`, {
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

  const getImage = (e) => {
    if (e.target.files[0] === undefined) {
      throw console.error("No File")
    } else {
      setImageFile(e.target.files[0])
      setImageSrc(URL.createObjectURL(e.target.files[0]))
      setImageName(e.target.files[0].name)
    }
  }
  console.log(vipData)
  return (
    <>
      <div className="row g-3 mt-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-2 text-uppercase">Buat Tugas Baru</h1>
        </div>
        {/* Content */}

        <div className="app-card app-card-settings shadow-sm p-4">
          <div className="app-card-body">
            <Form className="settings-form" onSubmit={SubmitNewTask}>

              <DropDownInput label="Judul Tugas" data={daftarTugas} name="daftar_tugas" optionLabel="Pilih Tugas" onChange={e => setJudulTugas(e.target.value)} />

              <DropDownInput label="Kategori Tugas" vip={vipData} name="daftar_tugas" optionLabel="Sesuaikan VIP" onChange={e => setKategori(e.target.value)} />

              <MainInput type="text" label="Link Tugas" className="form-control" id="link_tugas" name="link_tugas" onChange={e => setLinkTugas(e.target.value)} />

              <MainInput type="text" label="No Tlp Pengguna" className="form-control" id="no_tlp_pedagang" name="no_tlp_pedagang" onChange={e => setNoTlp(e.target.value)} />

              <MainInput type="text" label="Cost Tugas" className="form-control" id="cost_task" name="cost_task" onChange={e => setCost(e.target.value)} />
              {imageSrc === undefined && (

                <MainInput type="file" label="Gambar Contoh Tugas" className="form-control" id="image_tugas" name="image_tugas" onChange={getImage} />

              )}
              {imageSrc !== undefined && (
                <Row form>
                  <Col xs={4}>
                    <MainInput type="file" label="Gambar Contoh Tugas" className="form-control" id="image_tugas" name="image_tugas" onChange={getImage} />
                  </Col>
                  <Col xs={4}>
                    <img src={imageSrc} className="img-thumbnail" />
                    <FormText color="muted">
                      {image_name}
                    </FormText>
                  </Col>
                </Row>
              )}


              <MainInput label="Misi Tugas" style={{ height: "5em" }} type="textarea" className="form-control" id="misi_tugas" name="misi_tugas" onChange={e => setMisiTugas(e.target.value)} />

              <MainInput label="Deskripsi Tugas" style={{ height: "5em" }} type="textarea" className="form-control" id="deskripsi_tugas" name="deskripsi_tugas" onChange={e => setDeskripsi(e.target.value)} />

              <Button type="submit" color="primary" style={{ color: 'white' }}>Save Changes</Button>
            </Form>
          </div>{/*//app-card-body*/}
        </div>{/*//app-card*/}
      </div>{/*//row*/}

    </>
  )
}

export default CreateTugasPage
