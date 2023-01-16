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
            Atualmente trabalho como desenvolvedora Front-end na Conecto
            utilizando a tecnologia ReactJs, TypeScript, Styled-Component e
            Context-API.
          </p>

          <p style={{ marginBottom: 15 }}>
            Adoro aprender coisas novas, trabalhar em equipe e resolver
            problemas.
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
