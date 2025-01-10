import styled from "styled-components";

const InputEstilizado = styled.input`
  border-radius: 10px;
  background-color: transparent;
  padding: 25px 20px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border: 2px solid #5e5e5e;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  &:focus {
    border-color: #2271d1;
    box-shadow: inset 0 0 8px rgba(34, 113, 209, 0.7);
    outline: none;
  }
  &::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
  }
`;

const TituloInput = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line react/prop-types
const Input = ({ children, placeholder }) => {
  return (
    <InputContainer>
      <TituloInput>{children}</TituloInput>
      <InputEstilizado placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
