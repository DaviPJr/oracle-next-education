import styled from "styled-components";

import Titulo from "../components/Titulo";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { getCategoryData, getVideoData } from "../services/api";

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

function PaginaInicial() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasDados = await getCategoryData();
        const videosDados = await getVideoData();
        setCategorias(categoriasDados);
        setVideos(videosDados);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {categorias.map((categoria) => (
        <section key={categoria.nome}>
          <Titulo backgroundColor={categoria.cor} borderColor={categoria.cor}>
            {categoria.nome}
          </Titulo>
          <div style={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
            {videos
              .filter((video) => video.categoriaId === categoria.id)
              .map((video) => (
                <Card
                  key={video.id}
                  capa={video.capa}
                  titulo={video.titulo}
                  onEditClick={openModal}
                  categoria={categoria}
                />
              ))}
          </div>
        </section>
      ))}
      <Overlay isOpen={isModalOpen} onClick={closeModal} />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default PaginaInicial;
