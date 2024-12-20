import styled from "styled-components";

import facebook from "/imagens/sociais/facebook.svg";
import instagram from "/imagens/sociais/instagram.svg";
import twitter from "/imagens/sociais/twitter.svg";

const FooterEstilizado = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #04244f;
  margin-top: 50px;
  height: 80px;
`;

const SociaisEstilizadas = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 30px;
`;

const NomeContainer = styled.div`
  margin-right: 35px;
`;

const NomeEstilizado = styled.p`
  color: white;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <SociaisEstilizadas>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </SociaisEstilizadas>

      <NomeContainer>
        <NomeEstilizado>Desenvolvido por Davi Pereira</NomeEstilizado>
      </NomeContainer>
    </FooterEstilizado>
  );
};

export default Footer;
