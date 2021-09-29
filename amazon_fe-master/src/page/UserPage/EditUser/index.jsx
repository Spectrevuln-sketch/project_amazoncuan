import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderUser, FieldSpaceUser, InputAmazon } from '../../../components'
import './edit_user.css'
// NOTE IMPORT CONTEXT
import UserContext from '../../../context/CurrentUserContext';
// NOTE END IMPORT CONTEXT
const EditUser = () => {
  const { UserData } = useContext(UserContext);
  const history = useHistory()





  return (
    <div data-v-ebf933f6>
      <div data-v-75c77d1d data-v-ebf933f6 className="Site PageBox info">
        <HeaderUser label="Informasi Pribadi" style={{ color: 'white' }} />
        <div data-v-75c77d1d className="ScrollBox">
          <div data-v-75c77d1d role="button" tabIndex={0} className="van-cell van-cell--clickable van-cell--center van-cell--large">
            <i data-v-75c77d1d className="van-icon van-cell__left-icon">
              <img data-v-75c77d1d src="assets/images/icon/info_001.png" className="van-icon__image" />{/**/}
            </i>
            <div data-v-75c77d1d className="van-cell__title "><span data-v-75c77d1d>Gambar</span></div>
            <div data-v-75c77d1d className="van-cell__value"><img data-v-75c77d1d height={45} src="https://serve.bersinar666.com/jeecg-boot/sys/common/static/head/head_1.png," /></div>
            <i data-v-75c77d1d className="van-icon van-icon-arrow van-cell__right-icon">
              {/**/}
            </i>
          </div>
          <div data-v-75c77d1d className="van-cell van-cell--center van-cell--large">
            <i data-v-75c77d1d className="van-icon van-cell__left-icon">
              <img data-v-75c77d1d src="assets/images/icon/info_002.png" className="van-icon__image" />{/**/}
            </i>
            <div data-v-75c77d1d className="van-cell__title"><span data-v-75c77d1d>Nomor telepon</span></div>
            <div data-v-75c77d1d className="van-cell__value"><span data-v-75c77d1d>{UserData.no_tlp}</span></div>
          </div>
          <div data-v-75c77d1d role="button" tabIndex={0} className="van-cell van-cell--clickable van-cell--center van-cell--large" onClick={() => history.push('/akun_bank')}>
            <FieldSpaceUser label="Rekening Bank" />
          </div>
          <div data-v-75c77d1d role="button" tabIndex={0} className="van-cell van-cell--clickable van-cell--center van-cell--large" onClick={() => history.push('/detail_user')}>
            <FieldSpaceUser label="Detail" />
          </div>
          <div data-v-75c77d1d role="button" tabIndex={0} className="van-cell van-cell--clickable van-cell--center van-cell--large" onClick={() => history.push('/edit_sandi')}>
            <FieldSpaceUser label="Kata Sandi Akun" />
          </div>
          <div data-v-75c77d1d role="button" tabIndex={0} className="van-cell van-cell--clickable van-cell--center van-cell--large" onClick={() => history.push('/edit_sandi_dana')}>
            <FieldSpaceUser label="Kata Sandi Dana" />
          </div>
          <div data-v-75c77d1d role="button" tabIndex={0} className="Cache van-cell van-cell--clickable van-cell--center van-cell--large">
            <i data-v-75c77d1d className="van-icon van-icon-delete van-cell__left-icon">
              {/**/}
            </i>
            <div data-v-75c77d1d className="van-cell__title"><span data-v-75c77d1d>Kosongkan</span></div>
            <i data-v-75c77d1d className="van-icon van-icon-arrow van-cell__right-icon">
              {/**/}
            </i>
          </div>
        </div>
        {/**/} {/**/} {/**/}
      </div>
    </div>
  )
}

export default EditUser
