import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

import fechar from "/icones/fechar.png";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  border: none;
  background: transparent;
  width: 50%;
`;

const BotaoEstilizado = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const ModalZoom = ({ foto, fecharClick, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay onClick={fecharClick} />
          <DialogEstilizado open={!!foto}>
            <Imagem
              foto={foto}
              expansao={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <BotaoEstilizado onClick={fecharClick}>
                <img src={fechar} alt="Botão para fechar imagem" />
              </BotaoEstilizado>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
