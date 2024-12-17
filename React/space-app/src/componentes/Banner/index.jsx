import styled from "styled-components";

import banner from "../../assets/banner.png";

const BannerEstilizado = styled.section`
  background-image: url(${banner});
  height: 328px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  max-width: 100%;
  background-size: cover;
  flex-grow: 1;
`;

const TextoBannerEstilizado = styled.h1`
  color: white;
  font-family: "GandhiSansRegular";
  font-size: 38px;
  font-weight: 100;
  line-height: 1.3;
  margin-left: 100px;
`;

const Banner = () => {
  return (
    <BannerEstilizado>
      <TextoBannerEstilizado>
        A galeria mais <br />
        completa de <br />
        fotos do espaço!
      </TextoBannerEstilizado>
    </BannerEstilizado>
  );
};

export default Banner;
