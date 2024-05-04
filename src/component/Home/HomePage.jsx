import React, { useState } from 'react'
import style from "./HomePage.module.css"
import NavPage from '../Navbar/NavPage'
import DashboardPage from '../Dashboard/DashboardPage'

const HomePage = () => {
  const [selected, setSelected] = useState("dashboard")

  return (
    <div className={style["dashboard-conatainer"]}>
      <NavPage selected={selected} setSelected={setSelected}/>
      <DashboardPage selected={selected}/>
    </div>
  )
}

export default HomePage