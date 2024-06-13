import React from "react";
import "./estudio.css";
import BtnCertificado from "../../buttons/BtnCertificado";

const Estudio = ({ curso, lugar, fecha, completado }) => {
  return (
    <li className="listaEstudios">
      <div className="cursoDetalle">
        <h4>{curso}</h4>
        <p>{lugar}</p>
        <span>{fecha}</span>
      </div>
      <div className="cursoCompletado">
        <p>{completado ? "Completado" : "En progreso"}</p>
		<BtnCertificado/>
      </div>
    </li>
  );
};

export default Estudio;
