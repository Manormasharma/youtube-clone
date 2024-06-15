import React from 'react'

const MediaCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title , thumbnails } = snippet;
    return (
        <>
            <div className="w-1/4 px-3 pb-3">
                <img className='rounded-md mb-3' src={thumbnails.medium.url} alt="" />
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