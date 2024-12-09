import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import botao from "../imagens2/botao.png";

const Formulario = (props) => {
  const aoSalvar = (e) => {
    e.preventDefault();
    const id = uuidv4();
    let favorito = false;
    console.log(
      `Form foi submetido, ${nome}, ${cargo}, ${imagem}, ${time} ${id}`
    );
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      id,
      favorito,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const handleFormChange = () => {
    setFormOpen((prev) => !prev);
  };
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [formIsOpen, setFormOpen] = useState(false);

  return (
    <section className="formulario">
      <div className="formulario-cabecalho">
        <h1>Minha Organização: </h1>
        <img onClick={handleFormChange} src={botao} alt="botao" />
      </div>
      {formIsOpen && (
        <>
          <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador: </h2>
            <Campo
              label="Nome: "
              placeholder="Digite seu nome: "
              obrigatorio={true}
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
            />
            <Campo
              label="Cargo: "
              placeholder="Digite seu cargo: "
              obrigatorio={true}
              valor={cargo}
              aoAlterado={(valor) => setCargo(valor)}
            />
            <Campo
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.cadastrarTime({ nome: nomeTime, cor: corTime });
            }}
          >
            <h2>Preencha os dados para criar um novo time: </h2>
            <Campo
              label="Nome: "
              placeholder="Digite o nome do time: "
              obrigatorio
              valor={nomeTime}
              aoAlterado={(valor) => setNomeTime(valor)}
            />
            <Campo
              label="Cor: "
              type="color"
              placeholder="Digite a cor do time: "
              obrigatorio
              valor={corTime}
              aoAlterado={(valor) => setCorTime(valor)}
            />
            <Botao>Criar um novo time</Botao>
          </form>
        </>
      )}
    </section>
  );
};

export default Formulario;
