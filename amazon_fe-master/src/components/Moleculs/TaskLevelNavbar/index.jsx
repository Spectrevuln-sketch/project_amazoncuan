import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import TugasContext from '../../../context/TugasContext'
const TaskLevelNavbar = () => {
  const { id } = useParams();
  const { vendor } = useContext(TugasContext)
  const [tab, setTab] = useState(id)
  const history = useHistory();

  const ActiveTab = (props) => {
    setTab(props)
    history.push(`/taskLevel/${props}`)
  }
  return (
    <div className="van-tabs__wrap">
      <div role="tablist" className="van-tabs__nav van-tabs__nav--line">
        {vendor && (
          vendor.map(vend => {
            return (
              <>
                <div role="tab" onClick={() => ActiveTab(vend.id)} className={tab === vend.id ? "van-tab van-tab--active" : "van-tab"} aria-selected={tab === vend.id ? "true" : tab === false ? "true" : "false"}>
                  <span className="van-tab__text van-tab__text--ellipsis font-task-small">{vend.title_kategori}</span>
                </div>

                <div className="van-tabs__line" style={tab === 1 ? { transform: 'translateX(10.5px) translateX(-20%)', transitionDuration: '0.3s' } : tab === 2 ? { transform: 'translateX(111px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 3 ? { transform: 'translateX(210.5px) translateX(-55%)', transitionDuration: '0.3s' } : tab === 4 ? { transform: 'translateX(310px) translateX(-80%)', transitionDuration: '0.3s' } : { transform: 'translateX(10.5px) translateX(-20%)', transitionDuration: '0.3s' }}>
                </div>
              </>
            )
          })
        )}
        {/* <div role="tab" onClick={() => ActiveTab(2)} className={tab === 2 ? "van-tab van-tab--active" : "van-tab"} aria-selected={tab === 2 ? "true" : "false"}>
          <span className="van-tab__text van-tab__text--ellipsis font-task-small">Facebook</span>
          </div>
          <div role="tab" onClick={() => ActiveTab(3)} className={tab === 3 ? "van-tab van-tab--active" : "van-tab"} aria-selected={tab === 3 ? "true" : "false"}>
          <span className="van-tab__text van-tab__text--ellipsis font-task-small">TikTok</span>
          </div>
          <div role="tab" onClick={() => ActiveTab(4)} className={tab === 4 ? "van-tab van-tab--active" : "van-tab"} aria-selected={tab === 4 ? "true" : "false"}>
          <span className="van-tab__text van-tab__text--ellipsis font-task-small">Instagram</span>
        </div> */}
      </div>
    </div>
  )
}

export default TaskLevelNavbar
