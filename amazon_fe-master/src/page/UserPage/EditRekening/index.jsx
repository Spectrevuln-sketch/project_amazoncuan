import React, { useState } from 'react'
import axios from "axios";
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom';
import { HeaderUser, InputAmazon, ButtonEditUser } from '../../../components'
const EditRekening = () => {
  const [rekening, setRekening] = useState('')
  const [namabank, setNamaBank] = useState('')
  const history = useHistory()

  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()
  const onSubmitRek = (e) => {
    e.preventDefault();
    axiosInstnce.post('/update_rekening', {
      rekening: rekening,
      namabank: namabank
    }).then(res => {
      console.log(res)
      alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
    }).catch((err) => {
      if (err.response.status === 404) {
        var ErrMsg = err.response.data.errMsg
        ErrMsg.map(invalid => {
          alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{invalid.msg}</div>)
        })
        if (err.response.status === 404) {
          alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.response.data.message}</div>)
        }
      }
    })
  }
  return (
    <div data-v-ebf933f6>
      <div data-v-1ce3c9d1 data-v-ebf933f6 className="Site">
        <HeaderUser style={{ color: 'white' }} label="Informasi Pribadi" />
        <div data-v-1ce3c9d1>
          <div data-v-1ce3c9d1 role="separator" className="van-divider van-divider--content-center" style={{ textAlign: 'center' }}>Nama anda dan Nama di renkening bank anda haruslah sama , jika tiday anda tidak bisa mengeluarkan uang</div>
          <form data-v-1ce3c9d1 className="van-form">
            <InputAmazon label="Nomor Rekening  Bank" onChange={e => setRekening(e.target.value)} type="number" inputMode="decimal" placeholder="Sila mengisi Nomor Rekening Bank" name="rekening" id="rekening" />
            <InputAmazon label="Nama bank" onChange={e => setNamaBank(e.target.value)} type="text" placeholder="--Sila mengisi nama bank--" name="namabank" id="namabank" />
            <ButtonEditUser label="Segera Tambah" onClick={onSubmitRek} />
          </form>
          {/**/}
        </div>
        {/**/}
      </div>
    </div>

  )

}

export default EditRekening
