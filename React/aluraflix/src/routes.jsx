import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import PaginaInicial from "./pages/PaginaInicial";
import NovoVideo from "./pages/NovoVideo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import { getCategoryData, getVideoData } from "./services/api";

import { useEffect, useState } from "react";

const FundoColorido = styled.div`
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

function AppRoutes() {
  const location = useLocation();
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasDados = await getCategoryData();
        const videosDados = await getVideoData();
        setCategorias(categoriasDados);
        setVideos(videosDados);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <FundoColorido>
      <Header />
      {location.pathname === "/" && (
        <Banner videos={videos} categorias={categorias} />
      )}
      <AppContainer>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/novo-video" element={<NovoVideo />} />
        </Routes>
      </AppContainer>
      <Footer />
    </FundoColorido>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
