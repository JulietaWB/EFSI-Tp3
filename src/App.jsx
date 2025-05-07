import { useState } from 'react';
import './App.css'
import Cita from './componentes/Cita'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario citas={citas} setCitas={setCitas} />
          </div>

          <div class="one-half column"> 
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas={setCitas} />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
