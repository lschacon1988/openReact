import React from 'react';
import { Contacto } from '../../model/Contacto';
import ComponenteB from '../pure/ComponenteB';



const ComponenteA = () => {
    const contacto = new Contacto('luis', 'Chacon', 'lschacon61@gmail.com')
    return (
    <div>
        <ComponenteB contacto={contacto}/>
    </div>
    );
}




export default ComponenteA;