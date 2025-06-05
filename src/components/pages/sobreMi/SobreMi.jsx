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
          ¡Hola! Soy Álvaro Ruiz Kuchill, desarrollador frontend con gran entusiasmo por el mundo del desarrollo web y de software. He trabajado en proyectos personales y académicos usando tecnologías como JavaScript, React, Python y Java. Me apasiona crear experiencias de usuario intuitivas, accesibles y bien pensadas. Disfruto aprender constantemente y enfrentar nuevos desafíos que me permitan crecer como profesional.<br/> ¡Estoy listo para aportar y construir algo increíble juntos!
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
