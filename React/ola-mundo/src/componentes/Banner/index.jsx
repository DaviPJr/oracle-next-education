import styles from "./Banner.module.css";
import circuloColorido from "../../public/assets/video-2.3/assets/circulo_colorido.png";
import minhaFoto from "../../public/assets/video-2.3/assets/IMG_4333.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Davi Pereira, web developer.
          Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Círculo colorido"
          aria-hidden={true}
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="" />
      </div>
    </div>
  );
}
