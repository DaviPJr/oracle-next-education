import styled from "styled-components";

const Categoria = styled.select`
  width: 100%;
  padding: 25px 20px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border: 2px solid #5e5e5e;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"%3E%3Cpolyline points="6 9 12 15 18 9"%3E%3C/polyline%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 40px 40px;
  &:focus {
    border-color: #2271d1;
    box-shadow: 0 0 8px rgba(34, 113, 209, 0.5);
    outline: none;
  }
  option {
    background-color: black;
    color: white;
    font-size: 16px;
  }
`;

const CategoriaTitulo = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

// eslint-disable-next-line react/prop-types
const Select = ({ value, onChange }) => {
  return (
    <>
      <CategoriaTitulo>Categoria</CategoriaTitulo>
      <Categoria value={value} onChange={onChange}>
        <option value="FRONT END">FRONT END</option>
        <option value="BACK END">BACK END</option>
        <option value="MOBILE">MOBILE</option>
      </Categoria>
    </>
  );
};

export default Select;
