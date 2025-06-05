import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <p>Álvaro Ruiz Kuschill, 2024. Todos los derechos reservados.</p>
      </div>
      <div className="redes">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alvaro-ruiz-kuschill/"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a target="_blank" href="https://github.com/AlvaroRK">
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=alvaroo.rk06@gmail.com"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
