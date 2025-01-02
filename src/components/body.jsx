import React from 'react'
import SideBar from './sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';


const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body
