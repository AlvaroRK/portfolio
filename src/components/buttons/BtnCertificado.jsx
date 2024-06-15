import React from "react";
import "./btnCertificado.css";

const BtnCertificado = ({ fileUrl, fileName }) => {
  return (
    <a className="btnCert" href={fileUrl} download={fileName}>
      <button>Certificado</button>
    </a>
  );
};

export default BtnCertificado;
