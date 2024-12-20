import styled from "styled-components";

import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const SecaoFotos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px;
`;

const Galeria = ({
  fotos = [],
  aoFotoSelecionada,
  fotoExpandida,
  aoAlternarFavorito,
  aoSelecionarTag,
  limparFiltro,
}) => {
  return (
    <>
      <Tags aoSelecionarTag={aoSelecionarTag} limparFiltro={limparFiltro} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <SecaoFotos>
            {fotos.map((foto) => (
              <Imagem
                key={foto.id}
                foto={foto}
                aoZoomSolicitado={aoFotoSelecionada}
                expansao={fotoExpandida === foto.id}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            ))}
          </SecaoFotos>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
