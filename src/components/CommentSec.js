import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YT_COMMENT_API } from '../utils/Constants'


const commentsData = [
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
      replies: [{

      }]
    }]
  },
  {
    name: "Srishti Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Shaurya Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Ranbir Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Alia Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Amitabh Bachhan",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },{
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },
  {
    name: "Manorma Sharm",
    text: "lorem ipsume sda ff dolor sit",
    replies: [{
      name: "Manorma Sharm",
      text: "lorem ipsume sda ff dolor sit",
    }]
  },

]
const CommentSec = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    const getComments = async()=>{
       const data =  await fetch(YT_COMMENT_API+'&videoId='+videoId)
       const json  = await data.json()
       console.log(json.items)
    }

    
    const Comment =({data})=>{
      const {name, text, replies} = data;
      return (
        <div className='flex mb-4 items-center'>
          <div>
            <img src="https://placehold.co/50x50" className='rounded-full' />
          </div>
          <div className='pl-3'>
            <div className='font-bold'>{name}</div>
            <div>{text}</div>
          </div>
        </div>
      )
    }
    const CommentsList = ({comments}) => {
      return(
       <>
       { comments.map((comment,i)=><Comment key={i} data={comment} />) }
       </> 
      )
    }
    useEffect(()=>{
        // getComments();
    },[])
  return (
    <div><CommentsList comments={commentsData}/></div>
  )
}

export default CommentSec