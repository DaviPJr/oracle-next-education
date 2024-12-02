import "./Formulario.css";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log("Form foi submetido");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador: </h2>
        <CampoDeTexto
          label="Nome: "
          placeholder="Digite seu nome: "
          obrigatorio={true}
        />
        <CampoDeTexto
          label="Cargo: "
          placeholder="Digite seu cargo: "
          obrigatorio={true}
        />
        <CampoDeTexto
          label="Imagem: "
          placeholder="Digite o endereço da imagem: "
        />
        <ListaSuspensa label="Time:" item={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
