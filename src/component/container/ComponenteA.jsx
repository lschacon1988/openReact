import React, { useState } from 'react';
import { Contacto } from '../../model/Contacto';
import ComponenteB from '../pure/ComponenteB';



const ComponenteA = () => {
    const contacto = new Contacto('luis', 'Chacon', 'lschacon61@gmail.com', false)
    const [state, setState]= useState(contacto.conectado)
  const changeState = (e) => {
    // e.preventDefault()
    setState(!state)
  };
    return (
    <div>
        <ComponenteB contacto={contacto} changeState={changeState} state={state} />
    </div>
    );
}




export default ComponenteA;