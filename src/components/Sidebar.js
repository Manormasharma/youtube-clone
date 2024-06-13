import React from 'react'

const Sidebar = () => {
  return (
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