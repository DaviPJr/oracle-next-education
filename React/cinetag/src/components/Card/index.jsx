import styles from "./Card.module.css";
import iconeFavoritar from "/imagens/favoritar.png";
import desfavoritar from "/imagens/desfavoritar.png";
import { useFavoritoContext } from "../../context/Favoritos";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();

  const ehFavorito = favorito.some((fav) => fav.id === id);

  const icone = !ehFavorito ? iconeFavoritar : desfavoritar;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="Favorito"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
