import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  aoDeletar,
  id,
  favorito,
  aoFavoritar,
}) => {
  const favoritar = () => {
    aoFavoritar(id);
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart size={25} onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
