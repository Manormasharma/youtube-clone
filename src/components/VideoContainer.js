import React, { useEffect, useState } from 'react'
import { YT_VIDEO_API } from '../utils/Constants'
import MediaCard from './MediaCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos = async() =>{
    const data = await fetch(YT_VIDEO_API)
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=><MediaCard key={video.id} info={video} /> )}
      
    </div>
  )
}

export default VideoContainer