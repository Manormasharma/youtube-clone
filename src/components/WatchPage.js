import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/NavSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentSec from './CommentSec';
import { YT_CHANNELDETAIL_API, YT_SINGLEVIDEO_API } from '../utils/Constants';


const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const [videoContent, setVideoContent] = useState([])
    const [channelDetail, setChannelDetail] = useState([])

    const videoId = searchParams.get("v")
    
    const dispatch = useDispatch();
    const getSingleVideo = async() =>{
        const data = await fetch(YT_SINGLEVIDEO_API+'&id='+videoId)
        const json = await data.json()
        setVideoContent(json.items[0].snippet)
    }
    // const getChannelDetails = async() =>{
    //     const data = await fetch(YT_CHANNELDETAIL_API+'&id='+videoContent.channelId)
    //     const json = await data.json()
    //     setChannelDetail(json.items[0].snippet)
    // }

    useEffect(()=>{
        dispatch(closeMenu());  
        getSingleVideo(); 
        // getChannelDetails();
    },[])
    return (
        <div>
            <div className="video-responsive">
                <iframe
                    width="1200"
                    height="700"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Vieos"
                    className='mb-4'
                />
            </div>
            <div className='video-title pb-3 text-2xl font-bold'>{videoContent.title}</div>
            <div className='flex'>
                {/* <div className='flex items-center justify-items-center'>
                    <div className='channel-img mr-2'><img src={channelDetail.thumbnails.default.url} /></div>
                    <div className='channel-title'>{channelDetail.title}</div>    
                </div> */}
            </div>
            <CommentSec />
        </div>
    )
}

export default WatchPage