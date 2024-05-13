import julianaImg from "../../assets/Juliana.svg";
import { SocialMedia } from "../../components/SocialMedia";
import { Container } from "./styles";

export function AboutMe() {
  return (
    <Container>
      <div className="aboutMecontainer">
        <div className="imgContainer">
          <img src={julianaImg} alt="Juliana Dev" />
        </div>

        <div className="aboutMeDescription">
          <h1>Sobre mim</h1>
          <br />
          <p style={{ marginBottom: 15 }}>
            Atualmente trabalho como desenvolvedora Front-end
            utilizando as tecnologias React, TypeScript, Styled-Component, Redux e
            Context-API e trabalhando tambem no Back-end utilizando a tecnologia Laravel 8
          </p>

          <p style={{ marginBottom: 15 }}>
            Adoro aprender coisas novas, trabalhar em equipe e desenvolver soluções para os clientes.
          </p>

          <p>
            Facilitar a vida das pessoas com o meu trabalho é o que me motiva.
          </p>
        </div>
        <SocialMedia />
      </div>
    </Container>
  );
}
