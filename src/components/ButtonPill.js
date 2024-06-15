import React from 'react'

const ButtonPill = (props) => {
  return (
    <button className="px-4 py-2 font-semibold text-sm bg-gray-300 text-white rounded shadow-sm mx-2 text-black">{props.name}</button>
  )
}

export default ButtonPill