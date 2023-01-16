import { ChangeEvent, useEffect, useRef, useState } from "react";

import Aos from "aos";
import Swal from "sweetalert2";
import api from "../../service/api";
import { Container, ContainerButton } from "./styles";
import { FormContact } from "./types";

export function Main() {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>({} as File);
  const [link, setLink] = useState("");
  const [formData, setFormData] = useState<FormContact>({} as FormContact);
  const form = useRef<HTMLFormElement>(null);

  const handleFileInput = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // console.log('file ',file)
    setImage(file);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      formData.name !== "" ||
      formData.description !== "" ||
      formData.link !== ""
    ) {
      if (image) {
        api
          .post(
            "/image",
            {
              image: image,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res);
            /* if (res.status === 202) {
              api
                .post("/projects", formData)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                  if (res.status === 200) {
                    Swal.fire({
                      icon: "success",
                      title: "Projeto Salvo",
                      text: "Parabens, projeto salvo com sucesso !",
                    });
                  }
                })
                .catch((res) => {
                  console.log(res);
                  if (res.status === 404) {
                    Swal.fire({
                      icon: "error",
                      title: "Tente Novamente",
                      text: "Ocorreu um erro ao salvar o seu projeto.",
                    });
                  }
                });
            }*/
          });
      } else {
        api
          .post("/mails", formData)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Projeto Salvo",
                text: "Parabens, projeto salvo com sucesso !",
              });
            }
          })
          .catch((res) => {
            console.log(res);
            if (res.status === 404) {
              Swal.fire({
                icon: "error",
                title: "Tente Novamente",
                text: "Ocorreu um erro ao salvar o seu projeto.",
              });
            }
          });
      }
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
      description: description,
      image: image,
      link: link,
    });
  }, [setFormData, userName, description, image, link]);

  return (
    <Container>
      <div className="title">
        <h1>Cadastro de Projetos!</h1>
      </div>

      <div
        className="content"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-anchor=".contactAnchor"
      >
        <form
          ref={form}
          onSubmit={handleSubmit}
          id="formContact"
          encType="multipart/form-data"
        >
          <label>Nome Projeto:</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="name"
            value={userName}
          />
          <label>Descrição:</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            value={description}
          />
          <label>Link Github:</label>
          <input
            onChange={(e) => setLink(e.target.value)}
            type="text"
            name="link"
            value={link}
          />
          <label>Imagem:</label>
          <input onChange={handleFileInput} name="image" type="file" />
          <br />
          <ContainerButton>
            <div className="containerButton">
              <div className="animated-border"></div>
              <div className="corner">
                <input type="submit" value="Salvar" />
              </div>
            </div>
          </ContainerButton>
        </form>
      </div>
    </Container>
  );
}
