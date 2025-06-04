import Cita from "../Cita";
import './listado.css';

const Listado = ({ citas, setCitas }) => {
    const eliminarCita = (citaAEliminar) => {
      const nuevasCitas = citas.filter(c => c !== citaAEliminar);
      setCitas(nuevasCitas);
      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    };
  
    return (
      <div>
        {citas.length === 0 ? (
          <p>No hay citas</p>
        ) : (
          citas.map((cita, index) => (
            <Cita key={index} cita={cita} eliminarCita={eliminarCita} />
          ))
        )}
      </div>
    );
  };
  
  export default Listado;
  