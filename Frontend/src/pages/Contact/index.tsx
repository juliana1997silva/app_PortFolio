import React, { useEffect, useRef, useState } from "react";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Aos from "aos";
import Swal from "sweetalert2";
import api from "../../service/api";
import { Container, ContainerButton } from "./styles";
import { FormContact } from "./types";

const Contact: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [assunto, setAssunto] = useState("");
  const [formData, setFormData] = useState<FormContact>({} as FormContact);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      formData.name !== "" ||
      formData.mail !== "" ||
      formData.message !== "" ||
      formData.assunto !== ""
    ) {
      api
        .post("/mails", formData)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "E-mail Enviado",
              text: "Parabens, e-mail enviado com sucesso !",
            });
            setUserName("");
            setMessage("");
            setUserEmail("");
            setAssunto("");
          }
        })
        .catch((res) => {
          console.log(res);
          if (res.status === 404) {
            Swal.fire({
              icon: "error",
              title: "Tente Novamente",
              text: "Ocorreu um erro no envio do Email.",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Tente Novamente",
        text: "Favor preencher todos os campos",
      });
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 3000,
      mirror: true,
    });
    setFormData({
      name: userName,
      mail: userEmail,
      message: message,
      assunto: assunto,
    });
  }, [setFormData, userName, userEmail, message, assunto]);

  return (
    <Container
      emailIsFilled={userEmail}
      nameIsFilled={userName}
      messageIsFilled={message}
      assuntoIsFilled={assunto}
    >
      <ArrowDropDown className="ArrowDropDown" />
      <div className="title">
        <h1>Fale comigo!</h1>
      </div>

      <div
        className="content"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-anchor=".contactAnchor"
      >
        <form ref={form} onSubmit={handleSubmit} id="formContact">
          <label>Nome:</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Digite seu nome!"
            type="text"
            name="name"
            value={userName}
          />
          <label>Email:</label>
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Digite seu email!"
            type="email"
            name="mail"
            value={userEmail}
          />
          <label>Assunto:</label>
          <input
            onChange={(e) => setAssunto(e.target.value)}
            placeholder="Digite o assunto da mensagem"
            type="text"
            name="assunto"
            value={assunto}
          />
          <label>Mensagem:</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem!"
            name="message"
            value={message}
          />
          <ContainerButton>
            <div className="containerButton">
              <div className="animated-border"></div>
              <div className="corner">
                <input type="submit" value="Enviar" />
              </div>
            </div>
          </ContainerButton>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
