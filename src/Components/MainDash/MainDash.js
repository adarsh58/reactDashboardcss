import React from 'react'
import './MainDash.css'
import Cards from './Cards/Cards'
import BasicTable from '../Table/BasicTable'
const MainDash = () => {
  return (
    <div className='MainDash'>
      <h1>Dashboard</h1>
      <Cards/>
      <BasicTable/>
    </div>
  )
}

export default MainDash
