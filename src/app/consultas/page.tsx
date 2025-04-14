import Ejercicio1 from './(subconsultas)/eje1';
import Ejercicio2 from './(subconsultas)/eje2';
import Ejercicio3 from './(subconsultas)/eje3';
import Ejercicio4 from './(subconsultas)/eje4';
import Ejercicio5 from './(subconsultas)/eje5';

export default function SubconsultasPage() {
  return (
    <main className="p-8 bg-gray-100 justify-center min-h-screen">
    <div className="justify-center text-center">
      <h1 className="text-3xl text-centerfont-bold text-gray-800 mb-8">
        Subconsultas Realizadas
      </h1>
    </div>
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
    </main>
  );
}
