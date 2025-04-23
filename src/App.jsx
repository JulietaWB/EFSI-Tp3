import './App.css'
import Cita from './componentes/Cita'
import Formulario from './componentes/Formulario'

function App() {
  
  return (

    <>
        <div id="root">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div class="container">
            <div class="row">

              <div class="one-half column">
                <Formulario />
              </div>

              <div class="one-half column">
                <h2>Administra tus citas</h2>
                <Cita mascota="Rocco" duenio="Pepe" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
                <Cita mascota="Sifon" duenio="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
                <Cita mascota="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
              </div>

            </div>
          </div>
        </div>
    </>

  )
}

export default App
