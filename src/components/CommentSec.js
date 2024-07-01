import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YT_COMMENT_API } from '../utils/Constants'
import CommentList from './comment/CommentList'
const CommentSec = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    const getComments = async()=>{
       const data =  await fetch(YT_COMMENT_API+'&videoId='+videoId)
       const json  = await data.json()
      //  console.log(json.items)
    }
    const commentsData = [
      {
        name: "Manorma Sharm",
        text: "lorem ipsume sda ff dolor sit",
        replies: [
          {
            name: "Srishti Sharm",
            text: "lorem ipsume sda ff dolor sit",
            replies: [
              {
                name: "Srishti Sharm",
                text: "lorem ipsume sda ff dolor sit",
                replies: [
                  {
                    name: "Srishti Sharm",
                    text: "lorem ipsume sda ff dolor sit",
                    replies: [
                      {
                        name: "Srishti Sharm",
                        text: "lorem ipsume sda ff dolor sit",
                        replies: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            name: "Srishti Sharm",
            text: "lorem ipsume sda ff dolor sit",
            replies: []
          },
          {
            name: "Srishti Sharm",
            text: "lorem ipsume sda ff dolor sit",
            replies: []
          },
          {
            name: "Srishti Sharm",
            text: "lorem ipsume sda ff dolor sit",
            replies: []
          },
          {
            name: "Srishti Sharm",
            text: "lorem ipsume sda ff dolor sit",
            replies: []
          },
        ]
      },
      {
        name: "Srishti Sharm",
        text: "lorem ipsume sda ff dolor sit",
        replies: []
      },
      
    ]
    useEffect(()=>{
        // getComments();
    },[])
  return (
    <div><CommentList comments={commentsData}/></div>
  )
}

export default CommentSec