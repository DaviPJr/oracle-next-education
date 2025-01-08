import styles from "./Titulo.module.css";

// eslint-disable-next-line react/prop-types
function Titulo({ children }) {
  return <div className={styles.texto}>{children}</div>;
}

export default Titulo;
