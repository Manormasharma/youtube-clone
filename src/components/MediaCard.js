import React from 'react'
import { Link } from 'react-router-dom';

const MediaCard = ({ info }) => {
    const { id, snippet, statistics } = info;
    const { channelTitle, title , thumbnails } = snippet;
    return (
        <>
            <div className="w-full 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2   px-3 pb-3">
                <Link to={"watch?v="+ id}>
                    <img className='rounded-xl mb-3' src={thumbnails.medium.url} alt="" />
                </Link>
                <div className="mb-4">
                    <h4 className="text-sm font-medium">{title}</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                    Channel : {channelTitle}
                        <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">&#10003;</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                        View : {statistics.viewCount}
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                        Likes: {statistics.likeCount} 
                    </p>
                </div>
            </div>
        </>
    )
}

export default MediaCard