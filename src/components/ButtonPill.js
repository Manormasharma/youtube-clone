import React from 'react'

const ButtonPill = ({name}) => {
  // console.log(name)
  return (
    <button className="px-4 py-2 font-semibold text-sm bg-gray-300 text-black hover:bg-black hover:text-white rounded shadow-sm mx-2 text-black">{name}</button>
  )
}

export default ButtonPill