import React from "react";
import Proyecto from "./Proyecto";
import "./proyectos.css";

const Proyectos = () => {
	return (
		<section className="proyectos" id="proyectos">
			<h2><i className="fa-solid fa-code"></i> PROYECTOS</h2>
			<div className="proyectosContainer">
				<Proyecto
					nombre={"Medano Final"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
					]}
				/>
				<Proyecto
					nombre={"CelularXpress"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-js",
						"fa-brands fa-react",
					]}
				/>
				<Proyecto
					nombre={"ArgenShop"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-js",
					]}
				/>
				<Proyecto
					nombre={"Blog de noticias"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-python",
					]}
				/>
			</div>
		</section>
	);
};

export default Proyectos;
