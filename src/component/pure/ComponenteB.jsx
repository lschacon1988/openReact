import React from "react";
import propTypes from "prop-types";
import { Contacto } from "../../model/Contacto";

const ComponenteB = ({ contacto, changeState, state }) => {
  const { nombre, apellido, email } = contacto;
  
  

  return (
    <div>
      <h1>
        {nombre} {apellido}
      </h1>

      <h2>{email}</h2>

      <h4>{state ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
      <button
        onClick={()=>changeState()}
      >
        {state ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  state: propTypes.bool,
  contacto: propTypes.instanceOf(Contacto),
};

export default ComponenteB;
