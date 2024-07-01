import React from 'react'
import CommentCard from './CommentCard'


const CommentList = ({ comments }) => {
    return (
        <div>
          {
            comments.map((comment,i)=>(
              <>
                <CommentCard key={i} data={comment} />
                <div className='ml-5 bg-gray-400'>
                  <CommentList comments={comment.replies} />
                </div>
              </>
            ))
          }
        </div>
    )
}
export default CommentList