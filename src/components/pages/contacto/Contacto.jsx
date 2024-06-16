import { React, useRef } from "react";
import "./contacto.css";
import BtnBasic from "../../buttons/BtnBasic";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const emailService = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btnEnviar = document.getElementById("btnClasic");

    emailjs
      .sendForm(emailService, emailTemplate, form.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          console.log("ENVIADO");
          btnEnviar.innerHTML = "Enviado";
          btnEnviar.style.backgroundColor = "green";
          console.log(btnEnviar);
        },
        (error) => {
          console.log("ERROR", error.text);
          btnEnviar.innerHTML = "Error";
          btnEnviar.style.backgroundColor = "red";
        }
      );
  };

  return (
    <section className="contacto" id="contacto">
      <h2>
        <i className="fa-solid fa-magnifying-glass"></i> CONTACTO
      </h2>
      <div className="contactoContainer">
        <div className="manual">
          <p>
            Si tenés alguna duda y/o querés que forme parte de tu equipo, podés
            rellenar el formulario o contactarme a través de estos medios:
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>+54 11 3057-8856
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alvaroo.rk06@gmail.com"
              >
                alvaroo.rk06@gmail.com{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre:"
          />
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email:"
          />
          <textarea
            required
            id="mensaje"
            name="mensaje"
            placeholder="Mensaje:"
          ></textarea>
          <BtnBasic texto={"Enviar"} />
        </form>
      </div>
    </section>
  );
};

export default Contacto;
