import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../public/assets/video-2.3/assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "../../public/assets/video-2.3/assets/IMG_4333.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Davi!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Davi"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou um web developer e estou feliz de te ver por aqui.
        Minha história com programação começou em 2023, quando decidi mudar de
        carreira e perseguir meu sonho de trabalhar com tecnologia. Eu aprendi
        lógica de programação e o básico de algumas linguagens, como JavaScript,
        Python, Java, mas sem aprofundar muito em cada uma delas. Eu sempre
        gostei de estudar programação, mas era um sonho distante poder trabalhar
        de fato nessa área.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, primeiro cursei Odontologia na minha cidade, por
        indicação e auxílio do meu pai. Depois de formado, trabalhei 2 anos na
        área da saúde e foi sim uma experiência muito enriquecedora, porém eu
        queria mais.
      </p>
      <p className={styles.paragrafo}>
        Desde criança, sempre fui apaixonado por computação, tecnologia, e
        claro, video-games. Então pra mim, foi como um resgate poder hoje
        perseguir meu sonho de trabalhar com programação. Tem sido uma jornada
        árdua, desafiadora, mas muito recompensadora. A cada passo, projeto e
        conquista, posso sentir minha evolução se consolidando em me tornar um
        grande programador. Sigo focado nos meus objetivos, sei que ainda
        preciso aprender muito, mas todo o esforço será recompensado no futuro,
        tenho certeza!
      </p>
    </PostModelo>
  );
}
