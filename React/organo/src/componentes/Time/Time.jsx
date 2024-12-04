import React from "react";
import "./Time.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}
      >
        <input
          value={props.cor}
          type="color"
          className="input-cor"
          onChange={(e) => props.mudarCor(e.target.value, props.id)}
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              corDeFundo={props.cor}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              id={colaborador.id}
              aoDeletar={props.aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
