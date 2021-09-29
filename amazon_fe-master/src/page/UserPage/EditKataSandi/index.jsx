import React, { useState } from 'react'
import axios from "axios";
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom';
import { HeaderUser } from '../../../components'
const EditKataSandi = () => {
  const [sandi_lama, setSandiLama] = useState('')
  const [sandi_baru, setSandiBaru] = useState('')
  const [konfrim_sandi, setKonfrimSandi] = useState('')
  const history = useHistory()

  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()
  const onSubmitRek = (e) => {
    e.preventDefault();
    axiosInstnce.post('/update_password', {
      sandi_lama,
      sandi_baru,
      konfrim_sandi
    }).then(res => {
      console.log(res)
      if (res.data.status === 500) {
        alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
      }
      if (res.data.status === 400) {
        alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
      }
      if (res.data.status === 200) {
        alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
      }
    }).catch((err) => {
      console.log(err)
      alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.message}</div>)
    })
  }
  return (
    <div data-v-ebf933f6>
      <div data-v-1ce3c9d1 data-v-ebf933f6 className="Site">
        <HeaderUser label="Edit Sandi" style={{ color: 'white' }} />
        {/**/}
        <div data-v-1ce3c9d1>
          <div data-v-1ce3c9d1 role="separator" className="van-divider van-divider--content-center" style={{ textAlign: 'center' }}>Nama anda dan Nama di renkening bank anda haruslah sama , jika tiday anda tidak bisa mengeluarkan uang</div>
          <form data-v-1ce3c9d1 className="van-form">
            <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
              <div className="van-cell__title van-field__label"><span>Kata Sandi Lama</span></div>
              <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                  <input onChange={e => setSandiLama(e.target.value)} type="text" inputMode="decimal" placeholder="Isi Password Lama" className="van-field__control" /></div>
              </div>
            </div>
            <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
              <div className="van-cell__title van-field__label"><span>Kata Sandi Baru</span></div>
              <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                  <input onChange={e => setSandiBaru(e.target.value)} type="text" placeholder="Isi Password Baru" className="van-field__control" /></div>
              </div>
            </div>
            <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
              <div className="van-cell__title van-field__label"><span>Konfrim Kata Sandi</span></div>
              <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                  <input onChange={e => setKonfrimSandi(e.target.value)} type="text" placeholder="Isi Konfrim Password" className="van-field__control" /></div>
              </div>
            </div>
            <div data-v-1ce3c9d1 style={{ padding: '15px' }}>
              <button onClick={onSubmitRek} data-v-1ce3c9d1 className="van-button van-button--danger van-button--normal van-button--block" style={{ fontSize: '16px' }}>
                <div data-v-1ce3c9d1 className="van-button__content"><span data-v-1ce3c9d1 className="van-button__text">Segera tambah</span></div>
              </button>
            </div>
          </form>
          {/**/}
        </div>
        {/**/}
      </div>
    </div>

  )

}

export default EditKataSandi
