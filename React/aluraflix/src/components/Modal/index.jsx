/* eslint-disable react/prop-types */
import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";
import TextArea from "../TextArea";
import Botao from "../Botao";

import fechar from "../../assets/cross.png";
import { useEffect, useState } from "react";

const ModalEstilizado = styled.div`
  width: 60%;
  height: auto;
  background-color: #03122f;
  border-radius: 15px;
  border: 4px solid #6bd1ff;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 30px 30px;
`;

const BotaoFecharModal = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
`;

const TituloModal = styled.h1`
  color: #2271d1;
  text-align: center;
  font-size: 60px;
  font-weight: 900;
`;

const ContainerModal = styled.div`
  width: 55%;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 17px;
`;

const BotoesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 160px;
  margin-bottom: 18px;
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const Modal = ({ isOpen, closeModal, video, onSave }) => {
  console.log("Modal isOpen:", isOpen);

  const [titulo, setTitulo] = useState("");
  const [capa, setCapa] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  console.log("Modal States: ", { titulo, capa, link, descricao, categoriaId });

  const limparCampos = () => {
    setTitulo("");
    setCapa("");
    setLink("");
    setDescricao("");
    setCategoriaId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting data:", {
      titulo,
      capa,
      link,
      descricao,
      categoriaId,
    });
    const modalData = { titulo, capa, link, descricao, categoriaId };
    onSave(video.id, modalData);
  };

  useEffect(() => {
    if (video) {
      console.log("Setting video data for modal:", video);
      setTitulo(video.titulo);
      setCapa(video.capa);
      setLink(video.link);
      setCategoriaId(video.categoriaId);
      setDescricao(video.descricao);
    }
  }, [video]);

  return (
    <>
      <ModalEstilizado id="editDialog" isOpen={isOpen}>
        <BotaoFecharModal
          onClick={() => {
            console.log("Closing modal via close button");
            closeModal();
          }}
        >
          <img src={fechar} alt="Botão fecha modal" />
        </BotaoFecharModal>
        <TituloModal>EDITAR CARD:</TituloModal>
        <ContainerModal>
          <form onSubmit={handleSubmit}>
            <Input
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Insira o título aqui"
            >
              Título
            </Input>
            <Select
              name="categoriaId"
              value={categoriaId}
              onChange={(e) => setCategoriaId(e.target.value)}
            />
            <Input
              name="capa"
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
              placeholder="Insira a imagem"
            >
              Imagem
            </Input>
            <Input
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Insira o link"
            >
              Vídeo
            </Input>
            <TextAreaContainer>
              <TextArea
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <BotoesContainer>
                <Botao type="submit">SALVAR</Botao>
                <Botao
                  type="button"
                  onClick={() => {
                    console.log("LIMPAR button clicked");
                    limparCampos();
                  }}
                >
                  LIMPAR
                </Botao>
              </BotoesContainer>
            </TextAreaContainer>
          </form>
        </ContainerModal>
      </ModalEstilizado>
    </>
  );
};

export default Modal;
