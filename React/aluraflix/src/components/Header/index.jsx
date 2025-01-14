import styled from "styled-components";

import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 125px;
  border-bottom: 2px solid #2271d1;
  box-shadow: 0 0 10px rgba(0, 200, 255, 0.5), 0 0 20px rgba(0, 200, 255, 0.3),
    0 0 30px rgba(0, 200, 255, 0.1);
  transition: all 0.3s ease;
  padding: 0px 130px;
`;

const BotoesContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const BotaoEstilizado = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  color: ${(props) => (props.isActive ? "#2271d1" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px;
  border: 3px solid ${(props) => (props.isActive ? "#2271d1" : "#fff")};
  box-shadow: inset 0 0 3px rgba(34, 113, 209, 0.7),
    inset 0 0 8px rgba(34, 113, 209, 0.5),
    inset 0 0 17px rgba(34, 113, 209, 0.3);
  transition: all 0.3s ease;

  width: 180px;
  height: 54px;
  min-width: 120px;
`;

const Header = ({ isActive }) => {
  const location = useLocation();

  return (
    <HeaderEstilizado>
      <img src={logo} alt="Logo do Aluraflix" />
      <BotoesContainer>
        <BotaoEstilizado to="/" isActive={location.pathname === "/"}>
          HOME
        </BotaoEstilizado>
        <BotaoEstilizado
          to="/novo-video"
          isActive={location.pathname === "/novo-video"}
        >
          NOVO VÍDEO
        </BotaoEstilizado>
      </BotoesContainer>
    </HeaderEstilizado>
  );
};

export default Header;
