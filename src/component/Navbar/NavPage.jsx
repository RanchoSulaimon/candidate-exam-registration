import React, { useState } from 'react'
import style from "./NavPage.module.css"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SchoolIcon from '@mui/icons-material/School';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';

const nav_list = [
    {
      id: 1,
      navName: "Dashboard",
      navIcon: <DashboardCustomizeIcon/>,
      path: "/courses"
    },
    {
      id: 2,
      navName: "Courses",
      navIcon: <LibraryBooksIcon/>,
      path: "/courses"
    },
    {
      id: 3,
      navName: "Registration",
      navIcon: <HowToRegIcon/>,
      path: "/register"
    },
    {
      id: 4,
      navName: "Student",
      navIcon: <SchoolIcon/>,
      path: "/student"
    },
    {
      id: 5,
      navName: "Admin",
      navIcon: <PersonIcon/>,
      path: "/admin"
    }
  ]
const NavPage = (props) => {
  
  return (
    <div className={style["nav-container"]}>
      <div className={style.title}>
        <h3>Exam Register</h3>
      </div>
      <div className={style["list-container"]}>
        {nav_list.map((item)=>{
          return(
            <div className={style["nav-list-container"]}>
              <div className={props.selected === item.id ? style["nav-selected"]: style["nav-list"]} onClick={()=>{props.setSelected(item.id)}}>
                <Link to={item.path}>
                  <span style={{color:"white"}}>{item.navIcon}</span>
                  <p style={{color:"white", fontWeight: 600}}>{item.navName}</p>
                </Link>
              </div>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default NavPage