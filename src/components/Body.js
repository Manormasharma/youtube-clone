import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='container-fluid mx-auto px-5 flex mt-[82px]'>
        <Sidebar /> 
        <Outlet />
    </div>
  )
}

export default Body