import React from 'react'
import "./cv.css"

const CV = () => {
  return (
    <a href="\cv\Alvaro-Ruiz-Kuchill-CV.pdf" download={"Alvaro-Ruiz-Kuchill-CV.pdf"}>
      <button className='cvBtn'>Descargar CV</button>
    </a>
  )
}

export default CV