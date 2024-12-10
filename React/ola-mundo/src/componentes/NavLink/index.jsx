import styles from "./NavLink.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      className={`
          ${styles.link}
          ${localizacao.pathname === to ? styles.linkDestacado : ""}
          `}
      to={to}
    >
      {children}
    </Link>
  );
}
