import React from "react";
import "./home.css";
import CV from "../../buttons/CV";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="homeContainer">
        <div className="homeInfo">
          <h1>
            Hola, <br />
            Yo soy <span>Álvaro</span>, <br />
            Programador Frontend.
          </h1>
          <CV />
          <div className="homeContact">
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
        </div>
        <div className="imgContainer"></div>
      </div>
    </section>
  );
};

export default Home;
