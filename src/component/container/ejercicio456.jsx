import React, { Component, useEffect, useState } from "react";
// import '../../styles/clock.scss';

const Ejercicio456 = (props) => {
  const stateDefault = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };
  const [state, setState] = useState(stateDefault);

  useEffect(() => {
    let timerID = setInterval(() => {
      return tick();
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  },[state.fecha]);

  const tick = () => {
    return setState({
      fecha: new Date(),
      edad: state.edad + 1,
      nombre: state.nombre,
      apellidos: state.apellidos,
    });
  };
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Ejercicio456;
export class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}
