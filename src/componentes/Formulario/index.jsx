
import { useState } from "react";
import './formulario.css';

const Formulario = ({citas, setCitas}) => {
  const [mascota, setMascota] = useState("");
  const [duenio, setDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const agregarCita = (e) => {
    e.preventDefault();
    const cita = {
      mascota,
      duenio,
      fecha,
      hora,
      sintomas,
    };

    setCitas([...citas, cita]);

    // Limpiar el formulario
    setMascota("");
    setDuenio("");
    setFecha("");
    setHora("");
    setSintomas("");
  };


    return (
      <>
        <h2>Crear mi Cita</h2>
        <form onSubmit={agregarCita}>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)}
 />          
          <label>Nombre Dueño</label>
          <input type="text" name="propietario"  placeholder="Nombre dueño de la mascota" value={duenio}
          onChange={(e) => setDuenio(e.target.value)} />
          
          <label>Fecha</label>
          <input type="date" name="fecha"  value={fecha}
          onChange={(e) => setFecha(e.target.value)} />
          
          <label>hora</label>
          <input type="time" name="hora" value={hora}
          onChange={(e) => setHora(e.target.value)} />
          
          <label>Sintomas</label>
          <textarea name="sintomas" value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}> </textarea>
          
          <button type="submit">Agregar Cita</button>
        </form>
      </>
    );
  };
  
  export default Formulario;