import styled from "styled-components";

import expandir from "/icones/expandir.png";
import favorito from "/icones/favorito.png";
import favoritoAtivo from "/icones/favorito-ativo.png";

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

const Imagem = ({
  foto,
  aoZoomSolicitado,
  expansao = true,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita ? favoritoAtivo : favorito;

  return (
    <>
      <ImagemEstilizada>
        <Foto src={foto.path} alt="" />
        <FigCaption>
          <FigTitulo>{foto.titulo}</FigTitulo>
          <FigFooter>
            <FigFonte>{foto.fonte}</FigFonte>
            <DivBotao>
              <FigBotao onClick={() => aoAlternarFavorito(foto)}>
                <img src={iconeFavorito} alt="Favorito" />
              </FigBotao>
              {!expansao && (
                <FigBotao onClick={() => aoZoomSolicitado(foto)}>
                  <img src={expandir} alt="Expandir" />
                </FigBotao>
              )}
            </DivBotao>
          </FigFooter>
        </FigCaption>
      </ImagemEstilizada>
    </>
  );
};

export default Imagem;
