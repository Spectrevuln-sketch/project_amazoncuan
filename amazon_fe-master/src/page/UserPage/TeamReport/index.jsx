import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import CurrentTeamContext from '../../../context/GetCurrentTeam';
const TeamReport = () => {
  const { CurrentTeam } = useContext(CurrentTeamContext)
  const [team_data, setTeamData] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })


  useEffect(() => {
    GetTeam();
  }, [])

  const GetTeam = async () => {
    try {
      const TeamData = await axiosInstnce.get('/team-data');

      if (TeamData.status === 200) {
        setTeamData(TeamData.data)
      }
    } catch (err) {
      console.log(err)
    }

  }

  const HaveMember = ({ ...rest }) => {
    if (team_data) {

      return team_data.map(myteam => {
        return (

          <tr data-v-e47a6408 {...rest}>
            <td data-v-e47a6408>{myteam.user.no_tlp}</td>
            <td data-v-e47a6408>{myteam.user.member}</td>
            <td data-v-e47a6408>{Math.floor(myteam.user.pendapatan + myteam.user.saldo_topup)}</td>
            <td data-v-e47a6408>0</td>
            <td data-v-e47a6408>0</td>
            <td data-v-e47a6408>0</td>
            <td data-v-e47a6408>{myteam.user.createdAt}</td>
          </tr>

        )
      })
    }
  }

  return (
    <div data-v-ebf933f6>

      <div data-v-e47a6408 data-v-ebf933f6 className="Site">
        <div data-v-e47a6408 className="van-nav-bar">
          <div className="van-nav-bar__content">
            <div className="van-nav-bar__left">
              <i className="van-icon van-icon-arrow-left van-nav-bar__arrow">
                {/**/}
              </i>
            </div>
            <div className="van-nav-bar__title van-ellipsis">Laporan tim</div>
          </div>
        </div>
        <div data-v-e47a6408 className="van-tabs van-tabs--line">
          <div className="van-tabs__wrap">
            <div role="tablist" className="van-tabs__nav van-tabs__nav--line" style={{ borderColor: 'rgb(64, 135, 241)', background: 'rgb(21, 29, 49)' }}>
              <div role="tab" aria-selected="true" className="van-tab van-tab--active" style={{ color: 'rgb(64, 135, 241)' }}><span className="van-tab__text van-tab__text--ellipsis">Laporan tim</span></div>
              <div role="tab" className="van-tab" style={{ color: 'rgb(187, 187, 187)' }}><span className="van-tab__text van-tab__text--ellipsis">Tim ku</span></div>
              <div className="van-tabs__line" style={{ backgroundColor: 'rgb(64, 135, 241)', width: '60px', transform: 'translateX(94px) translateX(-50%)' }} />
            </div>
          </div>
          <div className="van-tabs__content">
            <div data-v-e47a6408 role="tabpanel" className="van-tab__pane" style={{}}>
              <div data-v-e47a6408 className="search">
                <div data-v-e47a6408>
                  <div data-v-e47a6408><input data-v-e47a6408 type="text" readOnly="readonly" placeholder="Pemilihan tanggal" />
                    -
                    <input data-v-e47a6408 type="text" readOnly="readonly" placeholder="Pemilihan tanggal" />
                  </div>
                  {/**/}
                </div>
                <button data-v-e47a6408 className="van-button van-button--info van-button--mini">
                  <div data-v-e47a6408 className="van-button__content"><span data-v-e47a6408 className="van-button__text">Pencarian</span></div>
                </button>
              </div>
              <div data-v-e47a6408 className="Report">
                <div data-v-e47a6408 role="feed" className="van-list">
                  <div data-v-e47a6408 className="MyEarnings van-grid" style={{ paddingLeft: '1px' }}>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Penambahan uang tim(IDR)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Pengeluaran uang tim(IDR)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Jumlah anggota menambah uang pertama kali(Satu)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Jumlah rekomendasi pertama(Satu)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Jumlah anggota tim(Satu)
                          {/**/}
                        </div>
                        {team_data.length}
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '50%', paddingRight: '1px', marginTop: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Penambahan tim(Satu)
                          {/**/}
                        </div>
                        {team_data.length}
                      </div>
                    </div>
                  </div>
                  <div data-v-e47a6408 className="van-tabs van-tabs--line" style={{ marginTop: '10px' }}>
                    <div className="van-tabs__wrap">
                      <div role="tablist" className="van-tabs__nav van-tabs__nav--line" style={{ borderColor: 'rgb(64, 135, 241)', background: 'rgb(21, 29, 49)' }}>
                        <div role="tab" aria-selected="true" className="van-tab van-tab--active" style={{ color: 'rgb(64, 135, 241)' }}><span className="van-tab__text van-tab__text--ellipsis">Tingkat pertama</span></div>
                        <div role="tab" className="van-tab" style={{ color: 'rgb(187, 187, 187)' }}><span className="van-tab__text van-tab__text--ellipsis">Tingkat kedua</span></div>
                        <div role="tab" className="van-tab" style={{ color: 'rgb(187, 187, 187)' }}><span className="van-tab__text van-tab__text--ellipsis">Tingkat ketiga</span></div>
                        <div className="van-tabs__line" style={{ backgroundColor: 'rgb(64, 135, 241)', transform: 'translateX(62.5px) translateX(-50%)' }} />
                      </div>
                    </div>
                    <div className="van-tabs__content">
                      {/**/} {/**/} {/**/}
                    </div>
                  </div>
                  <div data-v-e47a6408 className="MyEarnings van-grid" style={{ paddingLeft: '1px' }}>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Jumlah uang isi(IDR)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Jumlah orang isi uang(Satu)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                    <div data-v-e47a6408 className="van-grid-item" style={{ flexBasis: '33.3333%', paddingRight: '1px' }}>
                      <div className="van-grid-item__content van-grid-item__content--center">
                        <div className="van-grid-item__icon-wrapper">
                          Rabat isi uang(IDR)
                          {/**/}
                        </div>
                        0
                      </div>
                    </div>
                  </div>
                  <div data-v-e47a6408 className="MyTeam">
                    <table data-v-e47a6408 className="mt10">
                      <thead data-v-e47a6408>
                        <tr data-v-e47a6408>
                          <th data-v-e47a6408>User</th>
                          <th data-v-e47a6408>level</th>
                          <th data-v-e47a6408>Amount</th>
                          <th data-v-e47a6408>Number of tasks</th>
                          <th data-v-e47a6408>RFT</th>
                          <th data-v-e47a6408>Referral reward</th>
                          <th data-v-e47a6408>Time</th>
                        </tr>
                      </thead>
                      <tbody data-v-e47a6408>
                        <HaveMember style={{ backgroundColor: '#151d31' }} />
                      </tbody>
                    </table>
                  </div>
                  <div className="van-list__finished-text">Tidak ada data</div>
                  <div className="van-list__placeholder" />
                </div>
              </div>
              <div data-v-e47a6408 className="MyTeam" style={{ display: 'none' }}>
                <div data-v-e47a6408 role="feed" className="van-list">
                  {/**/}
                  <table data-v-e47a6408 className="mt10">
                    <thead data-v-e47a6408>
                      <tr data-v-e47a6408>
                        <th data-v-e47a6408>Pengguna</th>
                        <th data-v-e47a6408>Penambahan uang</th>
                        <th data-v-e47a6408>Pengeluaran uang</th>
                        <th data-v-e47a6408>Rabat</th>
                        <th data-v-e47a6408>Komisi</th>
                        <th data-v-e47a6408>Waktu pendaftaran</th>
                      </tr>
                    </thead>
                    <tbody data-v-e47a6408>
                      <tr data-v-b2cb782a>
                        <td data-v-b2cb782a>0</td>
                        <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
                        <td data-v-b2cb782a>0</td>
                        <td data-v-b2cb782a><em data-v-b2cb782a>0</em></td>
                        <td data-v-b2cb782a>08/20</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="van-list__placeholder" />
                </div>
              </div>
            </div>
            <div data-v-e47a6408 role="tabpanel" className="van-tab__pane" style={{ display: 'none' }}>
              {/**/}
            </div>
          </div>
        </div>
        {/**/}
      </div>
    </div >

  )
}

export default TeamReport
