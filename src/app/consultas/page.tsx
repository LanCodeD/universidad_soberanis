import Ejercicio1 from './(subconsultas)/eje1';
import Ejercicio2 from './(subconsultas)/eje2';
import Ejercicio3 from './(subconsultas)/eje3';
import Ejercicio4 from './(subconsultas)/eje4';
import Ejercicio5 from './(subconsultas)/eje5';

export default function SubconsultasPage() {
  return (
    <main className="max-w-4xl mx-auto py-8 space-y-10">
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
    </main>
  );
}
