import React from "react";
import propTypes from "prop-types";
import { Contacto } from "../../model/Contacto";

const ComponenteB = ({ contacto }) => {
  const { nombre, apellido, email, conectado } = contacto;
  return (
    <div>
      <h1>
        {nombre} {apellido}
      </h1>

      <h2>{email}</h2>

      <h4>{conectado ? "CONECTADO" : "DESCONECTADO"}</h4>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: propTypes.instanceOf(Contacto),
};

export default ComponenteB;
