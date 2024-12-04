import "./CampoDeTexto.css";

export const CampoDeTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={props.valor}
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoDeTexto;
