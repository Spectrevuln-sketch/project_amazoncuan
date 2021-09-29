import React from 'react'

const PusatCredit = () => {
  return (
    <div data-v-ebf933f6>
      <div data-v-5079926e data-v-ebf933f6 className="Site">
        <div data-v-5079926e className="van-nav-bar">
          <div className="van-nav-bar__content">
            <div className="van-nav-bar__left">
              <i className="van-icon van-icon-arrow-left van-nav-bar__arrow">
                {/**/}
              </i>
            </div>
            <div className="van-nav-bar__title van-ellipsis">Pusat kredit</div>
          </div>
        </div>
        <canvas data-v-5079926e canvas-id="canvasGauge" id="canvasGauge" width={375} height={230} className="Gauge" />
        <div data-v-5079926e role="button" tabIndex={0} className="title van-cell van-cell--clickable van-cell--borderless">
          <i data-v-5079926e className="van-icon van-icon-info van-cell__left-icon">
            {/**/}
          </i>
          <div data-v-5079926e className="van-cell__title"><span data-v-5079926e>Deskripsi kredit</span></div>
          <div data-v-5079926e className="van-cell__value"><span data-v-5079926e>Rekor kredit</span></div>
          <i data-v-5079926e className="van-icon van-icon-arrow van-cell__right-icon">
            {/**/}
          </i>
        </div>
        <div data-v-5079926e className="info" style={{ padding: '0px 16px 16px' }}>
          <p>1.Nilai kredit akan dinilai sekali dalam seminggu </p>
          <p> 2. Pengguna yang baru akan mendapat nilai kredit: <b>60</b></p>
          <p>3.Jika mendapati pengguna unggah gambar palsu semasa membuat tugas, nilai kredit akan ditolak:<b>1</b>,inlay kredit atasan akan ditolak:<b>7</b></p>
          <p>4.Jika pengguna tidak unggah gambar palsu nilai kredit akan tambah <b>1</b></p>
          <p>5.Nilai kredit yang di bawah <b>50</b> akan mempunyai batasan untuk mengeluarkan uang</p>
          <p>6.Nilai kredit yang di bawah <b>30</b> tugasnya akan ditolak separuh</p>
          <p>7.Nilai kredit yang di bawah <b>0</b>akan digantung akun</p>
        </div>
        {/**/}
      </div>
    </div>


  )
}

export default PusatCredit
