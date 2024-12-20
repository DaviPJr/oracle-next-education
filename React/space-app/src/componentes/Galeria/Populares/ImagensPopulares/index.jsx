import styled from "styled-components";

const ImagensPopularesEstilizadas = styled.img`
  border-radius: 20px;
`;

const ImagensPopulares = ({ foto }) => {
  return (
    <div>
      <ImagensPopularesEstilizadas src={foto} />
    </div>
  );
};

export default ImagensPopulares;
