import React from "react";
import "./formacion.css";
import Estudio from "./Estudio";

const Formacion = () => {
  return (
    <section className="formacion">
      <h2>
        <i className="fa-solid fa-book"></i> FORMACIÓN
      </h2>
      <div className="formacionContainer">
		<ul>
			<h3><i className="fa-solid fa-certificate"></i>Cursos</h3>
			<Estudio curso={"Desarrollo web"} lugar={"CoderHouse"} fecha={2021} completado={true}/>
			<Estudio curso={"JavaScript"} lugar={"CoderHouse"} fecha={2021} completado={true}/>
			<Estudio curso={"React Js"} lugar={"CoderHouse"} fecha={2021} completado={true}/>
			<Estudio curso={"Python"} lugar={"CoderHouse"} fecha={2022} completado={true}/>
		</ul>
		<ul>
			<h3><i className="fa-solid fa-graduation-cap"></i>Carrera</h3>
			<Estudio curso={"Licenciatura en sistemas"} lugar={"UNGS"} fecha={"2024"} completado={false}/>
		</ul>
	  </div>
    </section>
  );
};

export default Formacion;
