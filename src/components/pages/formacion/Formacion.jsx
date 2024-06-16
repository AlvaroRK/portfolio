import "./formacion.css";
import Estudio from "./Estudio";

const Formacion = () => {
  const nombres = ["Desarrollo web", "JavaScript", "React JS", "Python"];
  const fechas = ["2022", "2022", "2022", "2023"];

  const fileUrls = nombres.map(
    (nombre) => `images/Certificado ${nombre}.png`
  );
  return (
    <section className="formacion">
      <h2>
        <i className="fa-solid fa-book"></i> FORMACIÓN
      </h2>
      <div className="formacionContainer">
        <ul>
          <h3>
            <i className="fa-solid fa-certificate"></i>Cursos
          </h3>
          {nombres.map((nombre, index) => (
            <Estudio
              key={index}
              curso={nombre}
              lugar={"CoderHouse"}
              fecha={fechas[index]}
              completado={true}
              fileUrl={fileUrls[index]}
              fileName={`Certificado ${nombre}.png`}
            ></Estudio>
          ))}
        </ul>
        <ul>
          <h3>
            <i className="fa-solid fa-graduation-cap"></i>Carrera
          </h3>
          <Estudio
            curso={"Licenciatura en sistemas"}
            lugar={"UNGS"}
            fecha={"2024"}
            completado={false}
          />
        </ul>
      </div>
    </section>
  );
};

export default Formacion;
