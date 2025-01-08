import styles from "./Banner.module.css";

// eslint-disable-next-line react/prop-types
function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
    ></div>
  );
}

export default Banner;
