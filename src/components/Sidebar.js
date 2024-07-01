import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.nav.isMenuOpen);
  // pass in useSelector specific portion of store
  if(!isMenuOpen) return null // Early return pattern
  return  (
    <div className='w-1/6 sidebar-items py-5'>
        <ul className='border-b pb-3'>
            <li className='pb-3'>Home</li>
            <li className='pb-3'>Shorts</li>
            <li className='pb-3'>Subscription</li>
        </ul>
        <p className='py-3 font-bold'>You</p>
        <ul className='border-b pb-3'>
            <li className='pb-3'>History</li>
            <li className='pb-3'>Playlist</li>
            <li className='pb-3'>Watch Later</li>
            <li className='pb-3'>Liked Videos</li>
        </ul>
        <p className='py-3 font-bold'>Subscription</p>
        <ul className='border-b pb-3'>
            <li className='pb-3'>Zee Bussiness</li>
            <li className='pb-3'>Technical Baba</li>
            <li className='pb-3'>Aaj Tak Live</li>
        </ul>
        <p className='py-3 font-bold'>History</p>
        <ul className='border-b pb-3'>
            <li className='pb-3'>Liked Videos</li>
            <li className='pb-3'>Watch History</li>
            <li className='pb-3'>Shorts</li>
        </ul>
    </div>
  )
}

export default Sidebar