import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner/index";
import Card from "../../components/Card";
import styles from "./Favoritos.module.css";
import { useFavoritoContext } from "../../context/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
