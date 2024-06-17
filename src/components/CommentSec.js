import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YT_COMMENT_API } from '../utils/Constants'

const CommentSec = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    const getComments = async()=>{
       const data =  await fetch(YT_COMMENT_API+'&videoId='+videoId)
       const json  = await data.json()
      //  console.log(json.items)
    }
    useEffect(()=>{
        getComments();
    },[])
  return (
    <div>CommentSec</div>
  )
}

export default CommentSec