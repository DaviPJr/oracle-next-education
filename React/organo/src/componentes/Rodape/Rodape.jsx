import "./Rodape.css";
import logo from "../imagens2/logo.png";
import fb from "../imagens2/fb.png";
import tw from "../imagens2/tw.png";
import ig from "../imagens2/ig.png";

const Rodape = () => {
  return (
    <footer>
      <div className="socials">
        <img src={fb} alt="" />
        <img src={tw} alt="" />
        <img src={ig} alt="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="davi">
        <h5>Desenvolvido por Davi Pereira</h5>
      </div>
    </footer>
  );
};

export default Rodape;
