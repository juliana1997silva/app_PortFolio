import React, { FormEvent, useEffect, useRef, useState } from "react";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Aos from "aos";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { Container, ContainerButton } from "./styles";

const Contact: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('meus dados', {
        userName,
        userEmail,
        message
    },
    );

    if (!!userName && !!userEmail && !!message) {
        if (form.current !== null) {
            emailjs.sendForm('service_p1n1cu9', 'template_knoojcs', form.current, '2PBerX_y-kDTuru1K')
                .then((result) => {
                    console.log(result.text);
                    Swal.fire({
                      icon: "success",
                      title: "E-mail Enviado",
                      text: "Parabens, e-mail enviado com sucesso !",
                    });
                    setUserName("");
                    setMessage("");
                    setUserEmail("");
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                      icon: "error",
                      title: "E-mail Não Enviado",
                      text: "Por favor, tente novamente !",
                    });
                });
        }
    } else {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um erro !",
        text: "Por favor, preencha todos os dados!",
      });
    }
};
  useEffect(() => {
    Aos.init({
      duration: 3000,
      mirror: true,
    });
  }, []);

  return (
    <Container
      emailIsFilled={userEmail}
      nameIsFilled={userName}
      messageIsFilled={message}
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
        <form ref={form} onSubmit={sendEmail} id="formContact">
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
