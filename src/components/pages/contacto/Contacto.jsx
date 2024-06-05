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

    emailjs
      .sendForm(emailService, emailTemplate, form.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contacto" id="contacto">
      <h2>CONTACTO</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input id="nombre" name="nombre" type="text" placeholder="Nombre:" />
        <input id="email" name="email" type="email" placeholder="Email:" />
        <textarea id="mensaje" name="mensaje" placeholder="Mensaje:"></textarea>
        <BtnBasic texto={"Enviar"} />
      </form>
    </section>
  );
};

export default Contacto;
