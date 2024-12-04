import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.valor}
        onChange={(e) => props.aoAlterado(e.target.value)}
      >
        <option value=""></option>
        {props.item.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
