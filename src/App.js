import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/container/ComponenteA';
import Ejercicio456, { Clock } from './component/container/Ejercicio456';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponenteA/> */}
        {/* <Clock></Clock> */}
        <Ejercicio456/>
      </header>
    </div>
  );
}

export default App;
