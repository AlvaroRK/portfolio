import React from "react";
import "./proyecto.css";
/* AGREGAR LOS LINKS A GITHUB Y A LA PAGINA EN SI */
const Proyecto = ({ nombre, lenguajes }) => {
  if (!lenguajes || !Array.isArray(lenguajes)) {
    return console.log("no hay array");
  }
  return (
    <div className="proyecto">
      <img src="src\assets\imgNoche.jpeg" alt="" />
      <div className="proyectoInfo">
        <h3>{nombre}</h3>
        <div className="proyectoLeng">
          {lenguajes.map((leng, index) => (
            <i key={index} className={leng}></i>
          ))}
        </div>
        <div className="proyectoLinks">
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
