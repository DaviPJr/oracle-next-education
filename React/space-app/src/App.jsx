import { styled } from "styled-components";

import EstilosGlobais from "./componentes/EstilosGlobais/index.jsx";
import Cabecalho from "./componentes/Cabecalho/index.jsx";
import BarraLateral from "./componentes/BarraLateral/index.jsx";

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

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  );
}

export default App;
