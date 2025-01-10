import styled from "styled-components";

const TituloEstilizado = styled.h3`
  color: white;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  text-align: center;
  font-size: 32px;
  width: 432px;
  height: auto;
`;

// eslint-disable-next-line react/prop-types
const Titulo = ({ children, borderColor, backgroundColor }) => {
  return (
    <TituloEstilizado
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </TituloEstilizado>
  );
};

export default Titulo;
