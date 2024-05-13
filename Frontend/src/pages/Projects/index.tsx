import Aos from "aos";
import { useEffect } from "react";

import projFrancisco from "../../assets/projetoFrancisco.png";
import imageProjects from "../../assets/projects.png";

import { ProjectsItem } from "../../components/ProjectsItem";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Container } from "./styles";

export function Projects() {
  const projectsData = [
    {
      id: 1,
      repoImage: imageProjects,
      repoName: "Controle Financeiro",
      repoDescription:
        "Projeto de controle financeiro para visualizar as despesas e receitas da empresa. Projeto realizado para um processo seletivo em uma pequena empresa",
      repoLink: "https://github.com/juliana1997silva/ProjetoFrancisco",
    },
    {
      id: 2,
      repoImage: imageProjects,
      repoName: "Curso Spring Boot",
      repoDescription:
        "Projeto realizado em exercicios no curso Spring Boot da instituição Rocketseat",
      repoLink: "https://github.com/juliana1997silva/Spring_Boot",
    },
    {
      id: 3,
      repoImage: imageProjects,
      repoName: "Onboarding",
      repoDescription:
        "Projeto realizado para os clientes do app utilizarem para realizar o cadastro na plataforma",
      repoLink: "https://github.com/juliana1997silva/app_Cadastro",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 3000,
      mirror: true,
    });
  }, []);

  return (
    <Container>
      <ArrowDropDown className="ArrowDropDown" />
      <h1>Meus Projetos</h1>
      {projectsData.map((item) => (
        <div
          className="projectsContainer"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="200"
          data-aos-duration="500"
          key={item.id}
        >
          <ProjectsItem
            repoImage={item.repoImage}
            repoName={item.repoName}
            repoDescription={item.repoDescription}
            repoLink={item.repoLink}
            repoId={item.id}
          />
        </div>
      ))}
    </Container>
  );
}

export default Projects;
