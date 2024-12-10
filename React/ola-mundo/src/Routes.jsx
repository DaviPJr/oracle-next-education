import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio/index.jsx";
import SobreMim from "./paginas/sobre mim/index.jsx";
import Nav from "./componentes/Nav/index.jsx";
import Rodape from "./componentes/Rodape/index.jsx";
import PaginaPadrao from "./componentes/PaginaPadrao/index.jsx";
import Post from "./paginas/post/index.jsx";
import NaoEncontrada from "./paginas/naoEncontrada/index.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
