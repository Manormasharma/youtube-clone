import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.nav.isMenuOpen);
  // pass in useSelector specific portion of store
  if(!isMenuOpen) return null // Early return pattern
  return  (
    <div className='w-1/6 sidebar-items py-5'>
        <ul className='border-b pb-3'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <p>You </p>
        <ul className='border-b pb-3'>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <p>Subscription </p>
        <ul className='border-b pb-3'>
            <li>Zee Bussiness</li>
            <li>Technical Baba</li>
            <li>Aaj Tak Live</li>
        </ul>
    </div>
  )
}

export default Sidebar