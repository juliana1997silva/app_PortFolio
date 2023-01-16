import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { ButtonCustom } from "../../components/ButtonCustom";
import { SocialMedia } from "../../components/SocialMedia";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <div className="containerHome">
        <SocialMedia />
        <div className="containerText">
          <div className="homeTextContainer">
            <h1>
              Olá, me chamo <span>Juliana!</span>
            </h1>
            <div className="homeDescription">
              <h1>
                Uma desenvolvedora curiosa, que está sempre <br /> procurando
                novos desafios e novas experiências .
              </h1>
            </div>
          </div>

          <div className="welcomeText">
            <h1>Seja muito Bem vindo ao meu portfolio!</h1>
          </div>
          <ButtonCustom
            text="Ver Projetos"
            href="https://github.com/juliana1997silva"
            backgroundColor="#000"
            to={"projects"}
          />
        </div>
      </div>
      <ArrowDropDown className="ArrowDropDown" />
    </Container>
  );
}
