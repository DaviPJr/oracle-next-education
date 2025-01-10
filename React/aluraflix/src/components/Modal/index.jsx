import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";
import TextArea from "../TextArea";
import Botao from "../Botao";

import fechar from "../../assets/cross.png";

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
const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      <ModalEstilizado id="editDialog" isOpen={isOpen}>
        <BotaoFecharModal onClick={closeModal}>
          <img src={fechar} alt="Botão fecha modal" />
        </BotaoFecharModal>
        <TituloModal>EDITAR CARD:</TituloModal>
        <ContainerModal>
          <Input placeholder="Insira o título aqui">Título</Input>
          <Select />
          <Input placeholder="Insira a imagem">Imagem</Input>
          <Input placeholder="Insira o link">Vídeo</Input>
          <TextAreaContainer>
            <TextArea />
            <BotoesContainer>
              <Botao />
            </BotoesContainer>
          </TextAreaContainer>
        </ContainerModal>
      </ModalEstilizado>
    </>
  );
};

export default Modal;
