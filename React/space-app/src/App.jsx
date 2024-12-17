import { styled } from "styled-components";
import { useState } from "react";

import EstilosGlobais from "./componentes/EstilosGlobais/index.jsx";
import Cabecalho from "./componentes/Cabecalho/index.jsx";
import BarraLateral from "./componentes/BarraLateral/index.jsx";
import Banner from "./componentes/Banner/index.jsx";
import Galeria from "./componentes/Galeria/index.jsx";
import ModalZoom from "./componentes/ModalZoom/index.jsx";

import fotos from "./fotos.json";

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 40%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const LayoutPrincipal = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <LayoutPrincipal>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </LayoutPrincipal>
      </AppContainer>
      <ModalZoom />
    </FundoGradiente>
  );
};

export default App;
