import "./Campo.css";

export const Campo = ({
  aoAlterado,
  label,
  valor,
  obrigatorio,
  placeholder,
  type = "text",
}) => {
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        onChange={aoDigitado}
        value={valor}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
