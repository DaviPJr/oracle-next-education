import "./CampoDeTexto.css";

export const CampoDeTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoDeTexto;
