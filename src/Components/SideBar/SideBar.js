import React, { useState } from "react";
import './SideBar.css';
import logo from '../../imgs/logo.png'
import { SidebarData } from '../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";
const SideBar = () => {
  //State
  const [selected, setSelected] = useState(0);
  //Functions
  const onItemClick=(index)=>
  {
    setSelected(index);
  }
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
              className={selected===i?"MenuItem active":"MenuItem"}
              key={i}
              onClick={()=>onItemClick(i)}> 
            <e.icon />
              <span>{e.heading}</span>
            </div>
          )
        })}
      </div>
      <div className="MenuItemLast">
        <UilSignOutAlt />
      </div>

    </div>
  )
}

export default SideBar
