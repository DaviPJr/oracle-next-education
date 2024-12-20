import styled from "styled-components";

import CampoDeTexto from "../CampoDeTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ onBusca }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoDeTexto onChange={onBusca} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
