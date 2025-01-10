import styled from "styled-components";

const FormBotao = styled.button`
  padding: 18px 55px;
  border-radius: 15px;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: #2271d1;
    color: white;
  }
`;

const Botao = () => {
  return (
    <>
      <FormBotao>SALVAR</FormBotao>
      <FormBotao>LIMPAR</FormBotao>
    </>
  );
};

export default Botao;
