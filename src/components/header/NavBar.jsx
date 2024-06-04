import { useState } from "react";
import './navbar.css'

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<button className="bars" onClick={toggleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
				</svg>
			</button>
			<nav className={`nav ${menuOpen ? "isActive" : ""}`}>
				<ul>
					<li>
						<a href="#home">Inicio</a>
					</li>
					<li>
						<a href="#sobreMi">Sobre mí</a>
					</li>
					<li>
						<a href="#proyectos">Proyectos</a>
					</li>
					<li>
						<a href="#contacto">Contacto</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default NavBar;