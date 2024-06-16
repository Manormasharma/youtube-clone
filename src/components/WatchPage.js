import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/NavSlice';
import { useParams, useSearchParams } from 'react-router-dom';


const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());   
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
                />
            </div>
        </div>
    )
}

export default WatchPage