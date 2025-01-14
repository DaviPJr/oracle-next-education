import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/categorias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/categorias", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao publicar vídeo", error);
    throw error;
  }
};
