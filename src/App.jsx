import { useState, useEffect  } from 'react';
import './App.css'
import Cita from './componentes/Cita'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado';

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      console.log("entre al if");
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  useEffect(() => {
    if (citas.length) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    console.log("guardé la cita");
  }, [citas]);  


  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario citas={citas} setCitas={setCitas} />
          </div>

          <div className="one-half column"> 
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas={setCitas} />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
