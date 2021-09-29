import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const RuangPedagang = () => {
  const [vendor, setVendor] = useState([]);
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  useEffect(() => {
    GetAllVendor();
  }, [])

  const GetAllVendor = async () => {
    try {
      const DataVendor = await axiosInstnce.get('/all-vendor-data');
      console.log(DataVendor)
      if (DataVendor.status === 200) {
        setVendor(DataVendor.data);
      }
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div>
      <div className="Title van-cell van-cell--borderless font-small" id="amazon-bg-silver" style={{ margin: "10px 0 10px 0" }}>
        <div className="van-cell__title">
          <span>Ruang pedagang</span>
        </div>
      </div>
      <div className="TaskHall van-grid ID font-small" style={{ paddingLeft: "4px" }}>
        {vendor.length > 0 && (
          vendor.map(vend => {
            return (

              <div className="van-grid-item" style={{ flexBasis: "50%", paddingRight: "4px" }}>
                <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
                  <Link to={`/taskLevel/${vend.id}`}>
                    <div className="van-grid-item__icon-wrapper">
                      <h4>{vend.title_kategori}</h4>
                      Suka Ikuti
                    </div>
                    <img data-v-18d0403e src={`assets/taskupload/${vend.image_ketegori}`} alt="" style={{ width: '5em', height: "5em", display: "inline-block" }} />
                  </Link>
                </div>
              </div>
            )
          })
        )}
        {/* <div className="van-grid-item" style={{ flexBasis: "50%", paddingRight: "4px" }}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <Link to={"/taskLevel"}>
              <div className="van-grid-item__icon-wrapper">
                <h4>Facebook</h4>
                Suka Ikuti
              </div>
              <img src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126732468.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="van-grid-item" style={{ flexBasis: "50%", paddingRight: "4px", marginTop: "4px" }}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <Link to={"/taskLevel"}>
              <div className="van-grid-item__icon-wrapper">
                <h4>TikTok</h4>
                Suka Ikuti
              </div>
              <img src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126742405.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="van-grid-item" style={{ flexBasis: "50%", paddingRight: "4px", marginTop: "4px" }}>
          <div className="van-grid-item__content van-grid-item__content--center" id="amazon-bg-silver">
            <Link to={"/taskLevel"}>
              <div className="van-grid-item__icon-wrapper">
                <h4>Instagram</h4>
                Suka Ikuti
              </div>
              <img src="https://serve.bersinar666.com/jeecg-boot/sys/common/static?imgPath=1626126752397.png" alt="" />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RuangPedagang
