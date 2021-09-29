import React, { useState } from 'react'
import axios from "axios";
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom';
const EditSandiDana = () => {
  const [sandi_bank, setSandiBank] = useState('')
  const [konfrim_bank, setKonfimSandi] = useState('')
  const history = useHistory()

  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const alert = useAlert()
  const onSubmitData = (e) => {
    e.preventDefault();
    axiosInstnce.post('/update_sandi_bank', {
      sandi_bank,
      konfrim_bank,
    }).then(res => {
      console.log(res)
      alert.success(<div style={{ color: 'white', fontSize: '12px' }}>{res.data.message}</div>)
    }).catch((err) => {
      console.log(err)
      alert.error(<div style={{ color: 'white', fontSize: '12px' }}>{err.message}</div>)
    })
  }
  return (
    <div data-v-ebf933f6>
      <div data-v-1ce3c9d1 data-v-ebf933f6 className="Site">
        <div data-v-1ce3c9d1 className="van-nav-bar">
          <div className="van-nav-bar__content">
            <div className="van-nav-bar__left">
              <i className="van-icon van-icon-arrow-left van-nav-bar__arrow">
                {/**/}
              </i>
            </div>
            <div className="van-nav-bar__title van-ellipsis">Kata Sandi Bank</div>
          </div>
        </div>
        {/**/}
        <div data-v-1ce3c9d1>
          <div data-v-1ce3c9d1 role="separator" className="van-divider van-divider--content-center" style={{ textAlign: 'center' }}>Nama anda dan Nama di renkening bank anda haruslah sama , jika tiday anda tidak bisa mengeluarkan uang</div>
          <form data-v-1ce3c9d1 className="van-form">
            <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
              <div className="van-cell__title van-field__label"><span>Kata Sandi Bank</span></div>
              <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                  <input onChange={e => setSandiBank(e.target.value)} type="text" inputMode="decimal" placeholder="Isi Password Bank" className="van-field__control" /></div>
              </div>
            </div>
            <div data-v-1ce3c9d1 className="van-cell van-cell--borderless van-field">
              <div className="van-cell__title van-field__label"><span>Konfrimasi Kata Sandi</span></div>
              <div className="van-cell__value van-field__value">
                <div className="van-field__body">
                  <input onChange={e => setKonfimSandi(e.target.value)} type="text" placeholder="Isi Password Konfrimasi" className="van-field__control" /></div>
              </div>
            </div>
            <div data-v-1ce3c9d1 style={{ padding: '15px' }}>
              <button onClick={onSubmitData} data-v-1ce3c9d1 className="van-button van-button--danger van-button--normal van-button--block" style={{ fontSize: '16px' }}>
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

export default EditSandiDana
