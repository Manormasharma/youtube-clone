import React, { Suspense, useEffect, useState } from 'react'

import { YT_VIDEOLIST_API, YT_VIDEO_API } from '../utils/Constants'
// import MediaCard from './MediaCard'
import { Link } from 'react-router-dom'
const MediaCard = React.lazy(() => import('./MediaCard'));

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos = async() =>{
    const data = await fetch(YT_VIDEOLIST_API)
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
       <Suspense fallback={<div>Loading...</div>}>
        {videos.map(video=>(
          <MediaCard key={video.id} info={video}  />
        ) )}
       </Suspense>
    </div>
  )
}

export default VideoContainer