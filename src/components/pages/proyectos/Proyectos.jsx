import React from "react";
import Proyecto from "./Proyecto";
import "./proyectos.css";

const Proyectos = () => {
	return (
		<section className="proyectos" id="proyectos">
			<h2>PROYECTOS</h2>
			<div className="proyectosContainer">
				<Proyecto
					nombre={"proyecto 1"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-js",
					]}
				/>
				<Proyecto
					nombre={"proyecto 2"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-js",
						"fa-brands fa-react",
					]}
				/>
				<Proyecto
					nombre={"proyecto 4"}
					lenguajes={[
						"fa-brands fa-html5",
						"fa-brands fa-css3-alt",
						"fa-brands fa-python",
					]}
				/>
				<Proyecto
					nombre={"proyecto 5"}
					lenguajes={[
						"fa-brands fa-js",
					]}
				/>
			</div>
		</section>
	);
};

export default Proyectos;
