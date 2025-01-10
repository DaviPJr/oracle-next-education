import styled from "styled-components";
import logoFooter from "../../assets/logoFooter.png";

const RodapeEstilizado = styled.footer`
  background-color: black;
  border-top: 2px solid #2271d1;
  box-shadow: 0 0 10px rgba(0, 200, 255, 0.5), 0 0 20px rgba(0, 200, 255, 0.3),
    0 0 30px rgba(0, 200, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <RodapeEstilizado>
      <img src={logoFooter} alt="Logo Aluraflix Rodapé" />
    </RodapeEstilizado>
  );
};

export default Footer;
