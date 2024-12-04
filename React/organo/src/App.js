import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",

      cor: "#d9f7e9",
    },
    {
      nome: "Front-end",

      cor: "#E8F8FF",
    },
    {
      nome: "Data Science",

      cor: "#F0F8E2",
    },
    {
      nome: "Devops",

      cor: "#FDE7E8",
    },
    {
      nome: "Ux e Design",

      cor: "#FAE9F5",
    },
    {
      nome: "Mobile",

      cor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",

      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoDeletarColaborador = () => {
    console.log("Deletando colaborador");
  };

  const mudarCorDoTime = (cor, nome) => {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  return (
    <div>
      <Banner />
      <Formulario
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
            key={time.nome}
            nome={time.nome}
            cor={time.cor}
            mudarCor={mudarCorDoTime}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={aoDeletarColaborador}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
