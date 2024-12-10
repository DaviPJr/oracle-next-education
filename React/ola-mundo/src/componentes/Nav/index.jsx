import NavLink from "../NavLink";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/sobremim">Sobre mim</NavLink>
      </nav>
    </header>
  );
}
