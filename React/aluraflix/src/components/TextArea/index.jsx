import styled from "styled-components";

const Descricao = styled.textarea`
  width: 99%;
  padding: 10px 0px 60px 10px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  border: 2px solid #5e5e5e;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
  }
`;

const DescricaoTitulo = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-top: 40px;
`;

const TextArea = () => {
  return (
    <>
      <DescricaoTitulo>Descrição</DescricaoTitulo>
      <Descricao placeholder="Sobre o que é esse vídeo?" />
    </>
  );
};

export default TextArea;
