import Cabecalho from "../../components/Cabecalho/index";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import FavoritosProvider from "../../context/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
