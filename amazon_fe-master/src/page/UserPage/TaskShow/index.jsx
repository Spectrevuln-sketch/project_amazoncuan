import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { NonTask, TaskListHeader, FacoFileUploadTask } from '../../../components'
import './task-show.css'

const TaskShow = () => {
  const [tab, setTab] = useState(false)
  const ActiveTab = (props) => {
    setTab(props)
  }

  const MultiTab = () => {
    return (

      <div className="van-tabs__wrap">
        <div role="tablist" className="van-tabs__nav van-tabs__nav--line">
          <div style={{ fontSize: "13px" }} onClick={() => { ActiveTab(1) }} role="tab" className={tab === 1 ? "van-tab van-tab--active" : tab === false ? "van-tab van-tab--active" : 'van-tab'} aria-selected="true"><span className="van-tab__text">Langkah-langkah tugas</span></div>
          <div style={{ fontSize: "13px" }} onClick={() => { ActiveTab(2) }} role="tab" className={tab === 2 ? "van-tab van-tab--active" : 'van-tab'} aria-selected="true"><span className="van-tab__text">Sampel dengan verifikasi</span></div>
          <div className="van-tabs__line" style={tab === 1 ? { transform: "translateX(60px) translateX(-50%)", transitionDuration: "1s" } : tab === 2 ? { transform: "translateX(250px) translateX(-50%)", transitionDuration: "1s" } : { transform: "translateX(60px) translateX(-50%)", transitionDuration: "1s" }} />
        </div>
      </div>

    )
  }

  const SampelTaskVerifikasi = () => {
    return (
      <div className="van-tabs__content">
        <div data-v-f311afce role="tabpanel" className="van-tab__pane" style={{ display: 'none' }}>
          <ul data-v-f311afce className="task-step">
            <li data-v-f311afce>
              <h4 data-v-f311afce>Langkah ke </h4>
              <img data-v-f311afce src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1630403599703.jpg" alt="" className="images" />
              <p data-v-f311afce />
            </li>
          </ul>
        </div>
        <div data-v-f311afce role="tabpanel" className="van-tab__pane" style={{}}>
          <div data-v-f311afce className="van-empty">
            <div data-v-f311afce className="van-empty__image">
              <ul data-v-f311afce style={{ paddingBottom: '50px', color: 'rgb(0, 0, 0)' }}>
                <li data-v-f311afce style={{ marginBottom: '8px' }}>
                  <div data-v-f311afce className="van-image" style={{ width: '80vw', height: 'auto' }}><img src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1630403593078.jpg" className="van-image__img" alt="sampel_gambar" /></div>
                </li>
              </ul>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const LangkahTugas = () => {
    return (
      <div className="van-tabs__content">
        <div data-v-f311afce role="tabpanel" className="van-tab__pane">
          <ul data-v-f311afce className="task-step">
            <li data-v-f311afce>
              <h4 data-v-f311afce>Langkah ke </h4>
              <img data-v-f311afce src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1628581690919.jpg" alt="" className="images" />
              <p data-v-f311afce />
            </li>
          </ul>
        </div>
        <div data-v-f311afce role="tabpanel" className="van-tab__pane" style={{ display: 'none' }}>
        </div>
      </div>
    )
  }


  return (
    <div data-v-f311afce className="detail-info Site IndexBox">
      <TaskListHeader mainTitle="Detail tugas" />
      <div data-v-f311afce className="description">
        <div data-v-f311afce className="item" style={{ fontSize: "15px", backgroundImage: "radial-gradient(circle, #ffffff, #fbfbfb, #f8f8f8, #f4f4f4, #f1f1f1, #e9e9ea, #e0e2e2, #d9dad9, #cacccb, #bcbdbd, #afafaf, #a1a1a1)", color: "#000" }}>
          <div data-v-f311afce>
            <span data-v-f311afce>
              Judul pendapatan：
              <p data-v-f311afce style={{ fontWeight: 100, display: 'inline-block' }}>
                Suka berlangganan dan teruskan
              </p>
            </span>
            <span data-v-f311afce>
              Pendapatan tugas：&nbsp;IDR
              <p data-v-f311afce style={{ color: 'rgb(64, 135, 241)', fontWeight: 100, display: 'inline-block' }}>
                +3600
              </p>
            </span>
            <span data-v-f311afce>
              Deskripsi tugas：
              <p data-v-f311afce style={{ fontWeight: 100, display: 'inline-block' }}>
                Suka berlangganan dan teruskan，Anda perlu mengunggah tangkapan layar
              </p>
            </span>
            <span data-v-f311afce>Pemintaan unggah：Suka berlangganan dan teruskan，Anda perlu mengunggah tangkapan layar</span>
            <span data-v-f311afce className="upload">
              <div data-v-f311afce className="title">Menghantar sampel：</div>
              <FacoFileUploadTask style={{ height: "30px", width: "30px" }} value={{ color: "#bbb", size: "50px" }} />
              {/* <img data-v-f311afce src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1628589901495.PNG" alt="" className="images" style={{ width: '25vw', height: 'auto' }} /> */}
            </span>
            <span data-v-f311afce>Tanggal verifikasi：2021/08/10 17:05:03</span> <span data-v-f311afce>tenggat waktu：2022/08/12 15:47:42</span>
          </div>
        </div>
        <div data-v-f311afce className="item" style={{ fontSize: "15px", backgroundImage: "radial-gradient(circle, #ffffff, #fbfbfb, #f8f8f8, #f4f4f4, #f1f1f1, #e9e9ea, #e0e2e2, #d9dad9, #cacccb, #bcbdbd, #afafaf, #a1a1a1)", color: "#000" }}>
          <div data-v-f311afce className="user-info">
            <div data-v-f311afce className="van-image van-image--round" style={{ width: '40px', height: '40px' }}><img className="van-image__img" src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126723265.png" alt="image_pedagang" /></div>
            <div data-v-f311afce className="user-publish">
              <p data-v-f311afce>Permintaan</p>
              <div data-v-f311afce className="publish-date">
                <p data-v-f311afce>****5023</p>
                <div data-v-f311afce style={{ fontSize: "15px" }}>
                  2021/08/10 14:48:13 Publikasi
                </div>
              </div>
            </div>
          </div>
          <div data-v-f311afce className="url" style={{ fontSize: "12px" }}>
            <div data-v-f311afce className="van-cell--borderless van-field" style={{ margin: "10px 10px" }}>
              <div className="van-cell__value van-cell__value--alone van-field__value">
                <div className="van-field__body" style={{ width: "20em" }}>
                  {/* Set Value Url link */}
                  <Input type="text" readOnly className="van-field__control" value="" />
                </div>
              </div>
            </div>
            <ul data-v-f311afce style={{ margin: "0 10px 0 0" }}>
              <li data-v-f311afce><span data-v-f311afce>Salin</span></li>
              <li data-v-f311afce><span data-v-f311afce>Lompat</span></li>
            </ul>
          </div>
        </div>
        <div data-v-f311afce className="tab" style={{ fontSize: "15px" }}>
          <div data-v-f311afce className="van-tabs van-tabs--line">
            {/* tab content here */}
            <MultiTab />
            {tab === 2 ? <SampelTaskVerifikasi /> : tab === 1 ? <LangkahTugas /> : tab === false ? <LangkahTugas /> : <NonTask />}
          </div>
        </div>
        <div data-v-f311afce className="footer" style={{ display: 'none' }}>
          <ul data-v-f311afce>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TaskShow
