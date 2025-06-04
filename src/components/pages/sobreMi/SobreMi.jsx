import React from "react";
import "./sobreMi.css";

const SobreMi = () => {
  return (
    <section className="sobreMi" id="sobreMi">
      <h2>
        <i className="fa-regular fa-user"></i> SOBRE MÍ
      </h2>
      <div className="sobreMiContainer">
        <div className="imgContainerSM"></div>
        <p>
          ¡Hola! Soy Álvaro Ruiz Kuchill, un apasionado desarrollador frontend con una
          sólida experiencia en la creación de interfaces web atractivas y
          funcionales. Desde que comencé mi viaje en el desarrollo web, me he
          dedicado a aprender y dominar tecnologías clave como HTML, CSS,
          JavaScript y frameworks modernos como React. Mi objetivo es
          transformar ideas creativas en experiencias de usuario intuitivas y
          eficientes. Con un ojo agudo para el diseño y un enfoque meticuloso en
          la funcionalidad, me esfuerzo por entregar productos que no solo sean
          visualmente impresionantes sino también altamente accesibles y
          responsivos. Me encanta colaborar en proyectos desafiantes y siempre
          estoy buscando oportunidades para innovar y mejorar mis habilidades. <br />
          ¡Vamos a construir algo increíble juntos!
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
