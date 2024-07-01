import React from 'react'

const CommentCard = ({ data }) => {
  // console.log(data)
    const {name, text} = data;
    return (
      <div className='flex mb-2 items-center p-2 bg-gray-200'>
        <div>
          <img src="https://placehold.co/50x50" className='rounded-full' />
        </div>
        <div className='pl-3'>
          <div className='font-bold'>{name}</div>
          <p>{text}</p>
        </div>
      </div>
    )
}

export default CommentCard;