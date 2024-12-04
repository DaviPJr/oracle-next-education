import "./Formulario.css";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = (props) => {
  const aoSalvar = (e) => {
    e.preventDefault();
    console.log(`Form foi submetido, ${nome}, ${cargo}, ${imagem}, ${time}`);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador: </h2>
        <CampoDeTexto
          label="Nome: "
          placeholder="Digite seu nome: "
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoDeTexto
          label="Cargo: "
          placeholder="Digite seu cargo: "
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoDeTexto
          label="Imagem: "
          placeholder="Digite o endereço da imagem: "
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time:"
          item={props.time}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
