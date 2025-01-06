import React from "react";
import Botao from "@/components/Botao";
import Quantidade from "@/components/Quantidade";
import ValorFormatado from "@/components/ValorFormatado";
import InfoItemCarrinho from "./InfoItemCarrinho";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const ItemCarrinho = ({ itemCarrinho }) => {
  const { adicionarProduto, removerProduto, removerProdutoCarrinho } =
    useCarrinhoContext(CarrinhoContext);
  return (
    <li key={itemCarrinho.id}>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={itemCarrinho.src}
            alt={itemCarrinho.alt}
          />
          <InfoItemCarrinho itemCarrinho={itemCarrinho} />
          <ValorFormatado valor={itemCarrinho.preco} />
          <Quantidade
            itemCarrinho={itemCarrinho}
            adicionarProduto={adicionarProduto}
            removerProduto={removerProduto}
          />
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            handleClick={() => removerProdutoCarrinho(itemCarrinho.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinho;
