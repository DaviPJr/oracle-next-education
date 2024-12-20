import styled from "styled-components";

import Titulo from "../../Titulo";
import ImagensPopulares from "./ImagensPopulares";

import populares from "../../../populares.json";

const GaleriaPopulares = styled.aside`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  gap: 24px;
`;

const BotaoEstilizado = styled.button`
  width: 80%;
  height: 56px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border: 2px solid #7b78e5;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: #c98cf1;
    transform: scale(1.05);
  }
`;

const TituloEstilizado = styled(Titulo)`
  margin-bottom: -38px;
`;

const Populares = () => {
  return (
    <GaleriaPopulares>
      <TituloEstilizado $alinhamento="center">Populares</TituloEstilizado>;
      {populares.map((foto) => {
        return <ImagensPopulares key={foto.path} foto={foto.path} />;
      })}
      <BotaoEstilizado>Ver mais</BotaoEstilizado>
    </GaleriaPopulares>
  );
};

export default Populares;
