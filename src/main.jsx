import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import SobreMi from "./components/pages/sobreMi/SobreMi";
import Proyectos from "./components/pages/proyectos/Proyectos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <main>
      <Home />
      <SobreMi />
      <Proyectos/>
    </main>
    <Footer />
  </React.StrictMode>
);
