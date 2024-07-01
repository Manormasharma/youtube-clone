import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { toggleMenu } from '../utils/NavSlice';
import { useDispatch } from 'react-redux';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(toggleMenu());  
  },[])
  return (
    <div className="w-5/6">
       <ButtonList/>
       <VideoContainer/>
    </div>
  )
}

export default MainContainer