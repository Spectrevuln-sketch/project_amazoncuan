import React, { useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import { MdCameraAlt } from "react-icons/md";
import { Input, Form } from 'reactstrap';
import { FacoButton } from '..';
/* Additional Package */
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import axios from "axios";
import { useAlert } from 'react-alert'
/* End Additional Package */
const FacoFileUploadTask = (timeCreated, value, ...rest) => {
  const [fileTask, setFileTask] = useState('');
  const [imageSRC, setImageSRC] = useState();
  const alert = useAlert();


  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  const GetFileImageTask = (e) => {
    if (e.target.files[0] === undefined) {
      throw console.error('No File');
    } else {
      setFileTask(e.target.files[0]);
      setImageSRC(URL.createObjectURL(e.target.files[0]))
    }
  }

  const KirimTask = async (e) => {
    e.preventDefault();
    const CheckDate = Moment().isAfter(timeCreated.timeCreated, 'days')
    const formData = new FormData();
    if (CheckDate === true) {
      formData.append('cost_task',)
      await alert.info(<div style={{ color: 'white', fontSize: '12px' }}>Tugas Telah Expierd</div>)
    } else {
      formData.append('file', fileTask);
      formData.append('task_code', timeCreated.taskCode)
      formData.append('task_status', 'BERHASIL')
      await axiosInstnce.post('/uploadFileTask', formData)
        .then(res => {
          if (res.status === 200) {
            window.location.reload();
            alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
          }
        }).catch(err => {
          if (err.response.status === 405) {
            alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
          }
          if (err.response.status === 400) {
            alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
          }
          if (err.response.status === 501) {
            alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
          }
          if (err.response.status === 502) {
            alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
          }
          if (err.response.status === 404) {
            alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
          }
        })
    }
  }

  const ImageStandBy = () => {
    return (
      <>
        <img src={imageSRC} alt="thumb" style={{ width: "80%", height: "80%" }} />
      </>
    )
  }


  const IconFile = () => {
    return (
      <IconContext.Provider value={value}>
        <MdCameraAlt style={{ opacity: 0.3 }} />
      </IconContext.Provider>
    )
  }


  return (
    <Form>
      <div data-v-65641047 className="img" >
        <div data-v-65641047 className="van-uploader">
          <div className="van-uploader__wrapper">
            <div className="van-uploader__upload" {...rest}>
              {fileTask === undefined || fileTask === '' ? <IconFile /> : <ImageStandBy />}
              <Input name="task_image" id="task_image" type="file" className="van-uploader__input" onChange={GetFileImageTask} />
            </div>
          </div>
        </div>
      </div>
      <Input type="submit" value="Menghantar" style={{ backgroundImage: "radial-gradient(circle, #f2f2fb, #dbddf9, #c4c8f7, #aab4f5, #8ea0f3, #7e94f4, #6c88f5, #587cf6, #5473f9, #516afc, #5260fe, #5555ff)", padding: "10px", borderRadius: "20px", color: "white" }} onClick={KirimTask} />
    </Form>

  )
}

export default FacoFileUploadTask
