
import './App.css';
import Main from './Main';
import { CountProvider } from './store/CountContext';
import Radio from './Radio';
import Salida from './Salida';


function App() {
  return (
    <CountProvider>
      <Main />
      <div className='contenedorFlex'>
      <Radio/>
      <Salida/>
      </div>
      
    </CountProvider>
  );
}

export default App;
