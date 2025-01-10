/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const BannerEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 832px;
  gap: 250px;
  background-image: ${({ backgroundImage }) =>
    `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 2px solid ${({ borderColor }) => borderColor};
  border-bottom: 2px solid ${({ borderColor }) => borderColor};
  box-shadow: 0 0 5px ${({ borderColor }) => borderColor},
    0 0 10px ${({ borderColor }) => borderColor},
    0 0 20px ${({ borderColor }) => borderColor};
  margin-top: 50px;
`;

const BannerContainer = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 20%;
`;

const TituloEstilizado = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: white;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px;
  border-radius: 15px;
  display: inline-block;
`;

const SubtituloEstilizado = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 400;
`;

const CapaEstilizada = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  height: 100%;
  iframe {
    width: 646px;
    height: 333px;
    border: none;
    border-radius: 10px;
    border: 2px solid ${({ borderColor }) => borderColor};
    box-shadow: 0 0 5px ${({ borderColor }) => borderColor},
      0 0 10px ${({ borderColor }) => borderColor},
      0 0 20px ${({ borderColor }) => borderColor};
    transition: all 0.3s ease;
  }
`;

const Banner = ({ categorias }) => {
  const [videoIndex, setVideoIndex] = useState(0);

  const categoriaAtual = categorias[videoIndex];

  const videoAtual = categoriaAtual.videos[0];

  const handleNext = () => {
    if (videoIndex < categorias.length - 1) {
      setVideoIndex(videoIndex + 1);
    } else {
      setVideoIndex(0);
    }
  };

  const handlePrevious = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
    } else {
      setVideoIndex(categorias.length - 1);
    }
  };

  return (
    <>
      <BannerEstilizado
        borderColor={categoriaAtual.cor}
        backgroundImage={videoAtual.capa}
      >
        <BannerContainer>
          <TituloEstilizado
            backgroundColor={categoriaAtual.cor}
            borderColor={categoriaAtual.cor}
          >
            {categoriaAtual.nome}
          </TituloEstilizado>
          <SubtituloEstilizado>{videoAtual.titulo}</SubtituloEstilizado>
        </BannerContainer>
        <CapaEstilizada borderColor={categoriaAtual.cor}>
          <iframe
            src={videoAtual.link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </CapaEstilizada>
      </BannerEstilizado>
      <div style={{ textAlign: "center" }}>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </div>
    </>
  );
};

export default Banner;
