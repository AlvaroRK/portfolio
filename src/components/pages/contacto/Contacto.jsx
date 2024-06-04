import React from 'react'
import "./contacto.css"
import BtnBasic from '../../buttons/BtnBasic'

const Contacto = () => {
  return (
    <section className='contacto' id='contacto'>
        <h2>CONTACTO</h2>
        <form  action="">
            <input type="text"  placeholder='Nombre:'/>
            <input type="email" placeholder='Email:'/>
            <textarea placeholder='Mensaje:'></textarea>
            <BtnBasic texto={"Enviar"}/>
        </form>
    </section>
  )
}

export default Contacto