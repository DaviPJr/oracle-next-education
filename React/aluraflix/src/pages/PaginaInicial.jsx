import styled from "styled-components";

import Titulo from "../components/Titulo";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import {
  getCategoryData,
  getVideoData,
  updateVideo,
  deleteVideoId,
} from "../services/api";

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
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  const saveVideoChanges = async (id, updatedData) => {
    try {
      const updatedVideo = await updateVideo(id, updatedData);
      console.log("Updated video:", updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === id ? updatedVideo : video))
      );
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar alterações", error);
    }
  };

  const deleteVideo = async (videoId) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar este vídeo?"
    );
    if (!confirmDelete) return;
    const videosFiltrados = videos.filter((video) => video.id !== videoId);
    setVideos(videosFiltrados);
    try {
      await deleteVideoId(videoId);
      return videosFiltrados;
    } catch (error) {
      console.error("Erro ao excluir o vídeo", error);
    }
  };

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
                  onEditClick={() => openModal(video)}
                  onDeleteClick={() => deleteVideo(video.id)}
                  categoria={categoria}
                />
              ))}
          </div>
        </section>
      ))}
      <Overlay isOpen={isModalOpen} onClick={closeModal} />
      <Modal
        video={selectedVideo}
        onSave={saveVideoChanges}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default PaginaInicial;
