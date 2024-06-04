import React from 'react'
import "./btnBasic.css"

const BtnBasic = ({texto}) => {
  return (
    <button className='btnBasic'>{texto}</button>
  )
}

export default BtnBasic