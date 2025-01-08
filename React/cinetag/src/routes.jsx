import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape/index";
import Container from "./components/Container";
import Cabecalho from "./components/Cabecalho/index";
import FavoritosProvider from "./context/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
