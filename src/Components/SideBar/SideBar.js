import React, { useState } from "react";
import './SideBar.css';
import logo from '../../imgs/logo.png'
import { SidebarData } from '../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";
const SideBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="SideBar">
      <div className='Logo'>
        <img src={logo} alt='HOME'></img>
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="Menu">
        {SidebarData.map((e, i) => {
        
          return (
            <div
              className="menuItem active"
              key={i}> 
            <e.icon />
              <span>{e.heading}</span>
            </div>
          )
        })}
      </div>
      <div className="MenuItem">
        <UilSignOutAlt />
      </div>

    </div>
  )
}

export default SideBar
