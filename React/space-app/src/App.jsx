import { styled } from "styled-components";
import { useState } from "react";

import EstilosGlobais from "./componentes/EstilosGlobais/index.jsx";
import Cabecalho from "./componentes/Cabecalho/index.jsx";
import BarraLateral from "./componentes/BarraLateral/index.jsx";
import Banner from "./componentes/Banner/index.jsx";
import Galeria from "./componentes/Galeria/index.jsx";
import ModalZoom from "./componentes/ModalZoom/index.jsx";
import Footer from "./componentes/Footer/index.jsx";

import fotos from "./fotos.json";
import tags from "./componentes/Galeria/Tags/tags.json";

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
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [tagSelecionada, setTagSelecionada] = useState(null);
  const [textoBusca, setTextoBusca] = useState("");

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  const aoSelecionarTag = (tag) => {
    setTagSelecionada(tag);
  };

  const fotosFiltradas = fotosDaGaleria.filter((foto) => {
    if (textoBusca) {
      return tags.some(
        (tag) =>
          tag.id === foto.tagId &&
          tag.titulo.toLowerCase().includes(textoBusca.toLowerCase())
      );
    }
    return tagSelecionada ? foto.tagId === tagSelecionada.id : true;
  });

  const limparFiltro = () => {
    setTagSelecionada(null);
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho onBusca={(texto) => setTextoBusca(texto)} />
        <LayoutPrincipal>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosFiltradas}
              fotoExpandida={fotoSelecionada}
              aoAlternarFavorito={aoAlternarFavorito}
              aoSelecionarTag={aoSelecionarTag}
              limparFiltro={limparFiltro}
            />
          </ConteudoGaleria>
        </LayoutPrincipal>
      </AppContainer>
      <Footer />
      <ModalZoom
        foto={fotoSelecionada}
        fecharClick={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
