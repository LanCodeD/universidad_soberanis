import ActividadRegistro from "@/app/universidad/actividad/actividadex";

export default function Page() {
  return (
    <main className="p-8 bg-gray-100 justify-center min-h-screen">
      <div className="justify-center text-center">
        <h1 className="text-3xl text-centerfont-bold text-gray-800 mb-8">
          Registrar Actividad
        </h1>
      </div>
      <ActividadRegistro />
    </main>
  );
}
