import React from "react";
import Proyecto from "./Proyecto";
import "./proyectos.css";
import proyectosData from "./proyectosData";

const Proyectos = () => {
	return (
		<section className="proyectos" id="proyectos">
			<h2><i className="fa-solid fa-code"></i> PROYECTOS</h2>
			<div className="proyectosContainer">
				{proyectosData.map((proyecto) => 
					<Proyecto
						key={proyecto.nombre}
						nombre={proyecto.nombre}
						lenguajes={proyecto.lenguajes}
						image={proyecto.image}
					/>
				)}
			</div>
		</section>
	);
};

export default Proyectos;
