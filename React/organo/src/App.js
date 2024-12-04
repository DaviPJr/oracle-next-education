import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "Ux e Design",
      cor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoDeletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        time={times.map((time) => {
          return time.nome;
        })}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => {
        return (
          <Time
            key={time.id}
            id={time.id}
            nome={time.nome}
            cor={time.cor}
            mudarCor={mudarCorDoTime}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={aoDeletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
