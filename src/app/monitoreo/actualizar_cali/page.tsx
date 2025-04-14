import ActualizarCalificacionForm from '../actualizar_cali/triggers';

export default function Page() {
  return (
    <main className="p-8 bg-gray-100 justify-center min-h-screen">
      <div className="justify-center text-center">
        <h1 className="text-3xl text-centerfont-bold text-gray-800 mb-8">
          Actualizar Calificacion
        </h1>
        <p className='text-red-500 text-2xl mt-2 mb-2'>Coloca una calificacion entre el rango 0 y 10</p>
      </div>
      <ActualizarCalificacionForm/>
    </main>
  );
}