import SimulacionForm from '@/app/universidad/evento/inscripcion';

export default function Page() {
  return (
    <main className="p-8 bg-gray-100 justify-center min-h-screen">
      <div className="justify-center text-center">
        <h1 className="text-3xl text-centerfont-bold text-gray-800 mb-8">
          Simular Evento
        </h1>
      </div>
      <SimulacionForm/>
    </main>
  );
}
