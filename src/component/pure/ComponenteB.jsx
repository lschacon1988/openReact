import React, { useState } from "react";
import propTypes from "prop-types";
import { Contacto } from "../../model/Contacto";

const ComponenteB = ({ contacto }) => {
  const { nombre, apellido, email, conectado } = contacto;
  const [state, setState]= useState(conectado)
  const changeState = (e) => {
    e.preventDefault()
    setState(!state)
  };

  return (
    <div>
      <h1>
        {nombre} {apellido}
      </h1>

      <h2>{email}</h2>

      <h4>{state ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
      <button
        onClick={changeState}
      >
        {state ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  conectado: propTypes.bool,
  contacto: propTypes.instanceOf(Contacto),
};

export default ComponenteB;
