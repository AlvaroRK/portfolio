import React from 'react'
import "./btnBasic.css"

const BtnBasic = ({texto}) => {
  return (
    <button id='btnClasic' className='btnBasic'>{texto}</button>
  )
}

export default BtnBasic