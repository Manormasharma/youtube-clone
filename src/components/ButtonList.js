import React from 'react'
import ButtonPill from './ButtonPill'

const List = ["All", "Live" ,"Gaming", "React js", "Aaj tak", "News", "Internation"]
const ButtonList = () => {
  return (
    <div className='py-5'>
      {List.map((i,listItem)=>(
        <ButtonPill key={i} name={listItem}/>
      ))}
     </div>
  )
}

export default ButtonList