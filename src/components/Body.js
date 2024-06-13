import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='container-fluid mx-auto px-5 flex'>
        <Sidebar /> 
        <MainContainer />
    </div>
  )
}

export default Body