import axios from "axios";

export const getCategoryData = async () => {
  try {
    const responseCategoria = await axios.get(
      "http://localhost:3000/categorias"
    );
    return responseCategoria.data;
  } catch (error) {
    console.error("Erro ao buscar categorias", error);
    throw error;
  }
};

export const getVideoData = async () => {
  try {
    const responseVideos = await axios.get(`http://localhost:3000/videos`);
    return responseVideos.data;
  } catch (error) {
    console.error("Erro ao buscar videos", error);
    throw error;
  }
};

export const getCategoriaExistente = async (categoria) => {
  try {
    const categorias = await getCategoryData();
    return categorias.find((cat) => cat.nome === categoria);
  } catch (error) {
    console.error("Erro ao buscar categorias existentes", error);
    throw error;
  }
};

export const postVideo = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/videos", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao publicar vídeo", error);
    throw error;
  }
};
