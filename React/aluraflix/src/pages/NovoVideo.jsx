import styled from "styled-components";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import Botao from "../components/Botao";

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
  return (
    <Main>
      <TituloContainer>
        <MainTitulo>NOVO VÍDEO</MainTitulo>
        <MainSubtitulo>
          COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.
        </MainSubtitulo>
      </TituloContainer>
      <MainCriarCard>Criar Card</MainCriarCard>
      <MainForm>
        <FormContainer>
          <Input placeholder="Insira o título">Título</Input>
          <div>
            <Select />
          </div>
          <Input placeholder="Insira a imagem">Imagem</Input>
          <Input placeholder="Insira o link do vídeo">Vídeo</Input>
        </FormContainer>
        <DescricaoContainer>
          <TextArea />
          <BotoesContainer>
            <Botao />
          </BotoesContainer>
        </DescricaoContainer>
      </MainForm>
    </Main>
  );
};

export default NovoVideo;
