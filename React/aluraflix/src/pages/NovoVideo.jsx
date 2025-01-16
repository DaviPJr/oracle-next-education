import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import Botao from "../components/Botao";

import { getCategoryData, postVideo } from "../services/api";

const Main = styled.main``;

const MainTitulo = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 900;
`;

const MainSubtitulo = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto;
`;

const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const MainCriarCard = styled.h3`
  color: white;
  font-size: 36px;
  font-weight: 600;
  border-top: 3px solid rgba(255, 255, 255, 0.1);
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
`;

const MainForm = styled.form``;

const FormContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const BotoesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 50px;
  margin-bottom: 18px;
`;

const DescricaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 15px;
`;

const NovoVideo = () => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const limparCampos = () => {
    setTitulo("");
    setImagem("");
    setLink("");
    setDescricao("");
    setCategoria("");
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (
      ![titulo, imagem, link, categoria, descricao].every((field) =>
        field.trim()
      )
    ) {
      alert("Favor preencher os campos necessários");
      return;
    }

    const novoVideo = {
      id: uuidv4(),
      titulo,
      capa: imagem,
      link,
      descricao,
      categoriaId: null,
    };

    try {
      const categorias = await getCategoryData();
      const categoriaExistente = categorias.find(
        (cat) => cat.nome === categoria
      );

      if (categoriaExistente) {
        novoVideo.categoriaId = categoriaExistente.id;
        await postVideo(novoVideo);
        console.log("Vídeo adicionado à categoria existente");
      }

      limparCampos();
    } catch (error) {
      console.error("Erro ao adicionar vídeo", error);
    }
  };

  return (
    <Main>
      <TituloContainer>
        <MainTitulo>NOVO VÍDEO</MainTitulo>
        <MainSubtitulo>
          COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.
        </MainSubtitulo>
      </TituloContainer>
      <MainCriarCard>Criar Card</MainCriarCard>
      <MainForm onSubmit={handlePost}>
        <FormContainer>
          <Input
            placeholder="Insira o título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          >
            Título
          </Input>
          <div>
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <Input
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="Insira a imagem"
          >
            Imagem
          </Input>
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Insira o link do vídeo"
          >
            Vídeo
          </Input>
        </FormContainer>
        <DescricaoContainer>
          <TextArea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <BotoesContainer>
            <Botao type="submit">SALVAR</Botao>
            <Botao type="reset">LIMPAR</Botao>
          </BotoesContainer>
        </DescricaoContainer>
      </MainForm>
    </Main>
  );
};

export default NovoVideo;
