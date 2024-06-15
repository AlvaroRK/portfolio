import React from "react";
import "./estudio.css";
import BtnCertificado from "../../buttons/BtnCertificado";

const Estudio = ({
  curso,
  lugar,
  fecha,
  completado,
  onSelect,
  fileUrl,
  fileName,
}) => {

  return (
    <li onClick={onSelect} className="listaEstudios">
      <div className="cursoDetalle">
        <h4>{curso}</h4>
        <p>{lugar}</p>
        <span>{fecha}</span>
      </div>
      <div className="cursoCompletado">
        <p>{completado ? "Completado" : "En progreso"}</p>
        {completado ? (
          <BtnCertificado fileUrl={fileUrl} fileName={fileName} />
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default Estudio;
