import './cita.css';

const Cita =  ({ cita, eliminarCita }) => {
  const { mascota, duenio, fecha, hora, sintomas } = cita;
  
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{duenio}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button onClick={() => eliminarCita(cita)}>Eliminar ×</button>
    </div>
  );
};

export default Cita;
