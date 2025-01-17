import styled from "styled-components";
import editar from "../../assets/editar.png";
import deletar from "../../assets/Vector.png";

const getColorByCategoria = (categoria) => {
  switch (categoria.nome.toUpperCase()) {
    case "FRONT END":
      return "#6BD1FF";
    case "BACK END":
      return "#00C86F";
    case "MOBILE":
      return "#FFBA05";
    default:
      return "#FFFFFF";
  }
};

const CardContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const CardCapa = styled.img`
  height: 100%;
  width: 100%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border: 2px solid ${(props) => getColorByCategoria(props.categoria)};
  box-shadow: 0 0 5px ${(props) => getColorByCategoria(props.categoria)},
    0 0 10px ${(props) => getColorByCategoria(props.categoria)},
    0 0 20px ${(props) => getColorByCategoria(props.categoria)};
  transition: all 0.3s ease;
`;

const CardInfos = styled.div`
  border: 2px solid ${(props) => getColorByCategoria(props.categoria)};
  box-shadow: 0 0 5px ${(props) => getColorByCategoria(props.categoria)},
    0 0 10px ${(props) => getColorByCategoria(props.categoria)},
    0 0 20px ${(props) => getColorByCategoria(props.categoria)};
  transition: all 0.3s ease;
  background-color: black;
  height: 59px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const CardBotoes = styled.div`
  display: flex;
  gap: 8px;
`;

const CardBotao = styled.button`
  background-color: transparent;
  color: white;
  font-weight: 900;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ capa, titulo, onEditClick, categoria, onDeleteClick }) => {
  return (
    <>
      <CardContainer>
        <CardCapa
          src={capa}
          alt={`Capa do vídeo ${titulo}`}
          categoria={categoria}
        />
        <CardInfos categoria={categoria}>
          <CardBotoes>
            <img src={deletar} alt="Deletar" />
            <CardBotao onClick={onDeleteClick}>DELETAR</CardBotao>
          </CardBotoes>
          <CardBotoes>
            <img src={editar} alt="Editar" />
            <CardBotao onClick={onEditClick}>EDITAR</CardBotao>
          </CardBotoes>
        </CardInfos>
      </CardContainer>
    </>
  );
};

export default Card;
