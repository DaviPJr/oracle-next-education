import styles from "./Rodape.module.css";
import marcaRegistrada from "../../public/assets/video-2.3/assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={marcaRegistrada} alt="" />
      Desenvolvido por Davi Pereira
    </footer>
  );
}
