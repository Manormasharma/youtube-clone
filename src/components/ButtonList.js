import React from 'react'
import ButtonPill from './ButtonPill'

const List = ["All", "Live" ,"Gaming", "React js", "Aaj tak", "News", "Internation"]
// console.log(List[0])
const ButtonList = () => {
  return (
    <div className='py-5'>
      {List.map((item,i)=><ButtonPill key={i} name={item}/>)}
     </div>
  )
}

export default ButtonList