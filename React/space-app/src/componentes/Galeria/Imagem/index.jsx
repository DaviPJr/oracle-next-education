import styled from "styled-components";

import expandir from "/icones/expandir.png";
import favorito from "/icones/favorito.png";

const ImagemEstilizada = styled.figure`
  border-radius: 20px;
  overflow: hidden;
  max-width: 100%;
  margin: 0;
`;

const Foto = styled.img`
  width: 100%;
  display: block;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const FigCaption = styled.figcaption`
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #001634;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
`;

const FigTitulo = styled.h3`
  color: white;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
`;

const FigFonte = styled.p`
  color: white;
  margin: 0;
  margin-left: 10px;
`;

const FigFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const FigBotao = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`;

const DivBotao = styled.div`
  display: flex;
  gap: 12px;
`;

const Imagem = ({ titulo, fonte, path }) => {
  return (
    <>
      <ImagemEstilizada>
        <Foto src={path} alt="" />
        <FigCaption>
          <FigTitulo>{titulo}</FigTitulo>
          <FigFooter>
            <FigFonte>{fonte}</FigFonte>
            <DivBotao>
              <FigBotao>
                <img src={favorito} alt="Favorito" />
              </FigBotao>
              <FigBotao>
                <img src={expandir} alt="Expandir" />
              </FigBotao>
            </DivBotao>
          </FigFooter>
        </FigCaption>
      </ImagemEstilizada>
    </>
  );
};

export default Imagem;
