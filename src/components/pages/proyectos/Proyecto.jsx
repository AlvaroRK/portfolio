import React from "react";
import "./proyecto.css";
/* AGREGAR LOS LINKS A GITHUB Y A LA PAGINA EN SI */
const Proyecto = ({ nombre, lenguajes, image, github, pagina,descripcion }) => {
  if (!lenguajes || !Array.isArray(lenguajes)) {
    return console.log("no hay array");
  }
  return (
    <div className="proyecto">
      <img src={image} alt="imgPr" />
      <div className="proyectoInfo">
        <h3>{nombre}</h3>
		<p>{descripcion}</p>
        <div className="proyectoLeng">
          {lenguajes.map((leng, index) => (
            <i key={index} className={leng}></i>
          ))}
        </div>
        <div className="proyectoLinks">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          {pagina && (
            <a href={pagina} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
