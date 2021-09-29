import React, { useState } from 'react'

const MultiTabTask = (props) => {
  const [tab, setTab] = useState(false)
  const ActiveTab = (number) => {
    setTab(number)
  }
  return (
    <div role="tablist" className="van-tabs__nav van-tabs__nav--line van-tabs__nav--complete">
      <div onClick={() => { ActiveTab(1) }} role="tab" className={tab === 1 ? "van-tab van-tab--active" : tab === false ? "van-tab van-tab--active" : 'van-tab'} aria-selected="true"><span className="van-tab__text">{props.MenuTitle}</span></div>
      <div onClick={() => { ActiveTab(2) }} role="tab" className={tab === 2 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">{props.MenuTitle2}</span></div>
      <div role="tab" onClick={() => { ActiveTab(3) }} className={tab === 3 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">{props.MenuTitle3}</span></div>
      <div role="tab" onClick={() => { ActiveTab(4) }} className={tab === 4 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">{props.MenuTitle4}</span></div>
      <div role="tab" onClick={() => { ActiveTab(5) }} className={tab === 5 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">{props.MenuTitle5}</span></div>
      <div role="tab" onClick={() => { ActiveTab(6) }} className={tab === 6 ? "van-tab van-tab--active" : "van-tab"}><span className="van-tab__text">{props.MenuTitle6}</span></div>

      <div className="van-tabs__line" style={tab === 1 ? { transform: 'translateX(70.5px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 2 ? { transform: 'translateX(240.5px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 3 ? { transform: 'translateX(365.5px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 4 ? { transform: 'translateX(455.5px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 5 ? { transform: 'translateX(530.5px) translateX(-50%)', transitionDuration: '0.3s' } : tab === 6 ? { transform: 'translateX(660.5px) translateX(-50%)', transitionDuration: '0.3s' } : { transform: 'translateX(70.5px) translateX(-50%)', transitionDuration: '0.3s' }} />
    </div>
  )
}

export default MultiTabTask
