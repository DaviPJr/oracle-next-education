import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

// eslint-disable-next-line react/prop-types
function CabecalhoLink({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}

export default CabecalhoLink;
