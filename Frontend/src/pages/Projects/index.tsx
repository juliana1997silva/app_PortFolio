import Aos from "aos";
import { useEffect } from "react";

import projFrancisco from "../../assets/projetoFrancisco.png";

import { ProjectsItem } from "../../components/ProjectsItem";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Container } from "./styles";

export function Projects() {
  const projectsData = [
    {
      id: 1,
      repoImage: projFrancisco,
      repoName: "Projeto Francisco",
      repoDescription:
        "Projeto de controle financeiro para visualizar as despesas e receitas da empresa. Projeto realizado para um processo seletivo em uma pequena empresa",
      repoLink: "https://github.com/juliana1997silva/ProjetoFrancisco",
    },
    {
      id: 2,
      repoImage: projFrancisco,
      repoName: "Trucker Pay",
      repoDescription: "Projeto de APP banco digital.",
      repoLink: "https://github.com/juliana1997silva/ProjetoTruckerPay",
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
