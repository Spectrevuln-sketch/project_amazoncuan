import React, { useState } from 'react'
import { HeaderUser, InputAmazon, ButtonEditUser } from '../../../components'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useAlert } from 'react-alert'
const DetailEditUser = () => {
  const [nama_akun, setNamaAkun] = useState('');
  const [email_akun, setEmailAkun] = useState('');
  const history = useHistory();
  const alert = useAlert()
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })


  const onSubmitDetail = async (e) => {
    try {
      e.preventDefault();
      const UpdateUser = await axiosInstnce.post('/update-user-detail', {
        nama_akun,
        email_akun
      })
      if (UpdateUser.status === 200) {
        console.log(UpdateUser)
        await alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{UpdateUser.data.message}</div>)
      }
    } catch (err) {
      if (err.response.status === 409) {
        await alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)

      }
    }
  }

  return (
    <div data-v-ebf933f6>
      <div data-v-ec3f98ba data-v-ebf933f6 className="Site">
        <HeaderUser label="Informasi Pribadi" style={{ color: 'white' }} />
        <form data-v-1ce3c9d1 className="van-form">
          <InputAmazon label="Nama sebenar" onChange={e => setNamaAkun(e.target.value)} type="text" inputMode="decimal" placeholder="Nama sebenarnya" name="nama_user" id="nama_user" />
          <InputAmazon label="Email User" onChange={e => setEmailAkun(e.target.value)} type="text" placeholder="Email Untuk Payment" name="email_user" id="email_user" />
          <ButtonEditUser label="Segera Tambah" onClick={onSubmitDetail} />
        </form>

      </div>
    </div>

  )
}

export default DetailEditUser
