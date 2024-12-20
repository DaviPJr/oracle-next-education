import styled from "styled-components";
import search from "/imagens/search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoDeTextoEstilizado = styled.input`
  border-radius: 10px;
  background: transparent;
  width: 40%;
  height: 56px;
  padding: 12px 16px;
  border: 2px solid;
  border-color: #c98cf1;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoDeTexto = ({ onChange, ...props }) => {
  return (
    <ContainerEstilizado>
      <CampoDeTextoEstilizado
        onChange={(e) => onChange(e.target.value)}
        placeholder="O que você procura?"
        {...props}
      />
      <IconeLupa src={search} alt="Ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoDeTexto;
