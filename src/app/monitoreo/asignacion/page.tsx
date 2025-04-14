import AsignarProfesor from '../asignacion/asignacion';

export default function Page() {
  return (
    <main className="p-8 bg-gray-100 justify-center min-h-screen">
      <div className="justify-center text-center">
        <h1 className="text-3xl text-centerfont-bold text-gray-800 mb-8">
          Asignar Profesor a un Horario
        </h1>
        <p className='text-red-500 text-2xl mt-2 mb-2'>Coloca datos existentes</p>
      </div>
      <AsignarProfesor/>
    </main>
  );
}