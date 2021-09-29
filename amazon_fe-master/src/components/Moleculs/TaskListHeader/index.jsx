import React from 'react'
import { useHistory } from 'react-router-dom'
// icon Atoms
import { IconContext } from "react-icons";
import { RiArrowLeftSLine } from "react-icons/ri"
const TaskListHeader = ({ mainTitle, ...rest }) => {
  /* Go Back */
  const history = useHistory();
  const goBack = () => {
    history.goBack();
    console.log('back')
  }
  /* End Go Back */
  return (
    <div data-v-24948ec7="" className="van-nav-bar" style={{ backgroundImage: "radial-gradient(circle, #ffffff, #fff4ff, #ffe7eb, #ffe0c5, #ffe4a2, #ffe68c, #ffe976, #faed5e, #fbe44d, #fcdb3a, #fdd225, #ffc800)" }}>
      <div className="van-nav-bar__content">
        <div className="van-nav-bar__left" onClick={goBack}>

          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div>
              <RiArrowLeftSLine />
            </div>
          </IconContext.Provider>

        </div>
        <div className="van-nav-bar__title van-ellipsis" style={{ fontSize: "18px", color: "#D4AF37" }}>{mainTitle}</div>
      </div>
    </div>

  )
}

export default TaskListHeader
