import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function TasksPage() {
  return (
    <div className="p-6">
      {/* Encabezado principal */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tareas del usuario</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
          Añadir tarea <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {/* Contenedor principal de 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Tabla/Lista de Tareas */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="border-b pb-3 mb-3 text-sm font-semibold text-gray-500 grid grid-cols-4">
            <span>Nombre de la tarea</span>
            <span>Estado</span>
            <span>Fecha</span>
            <span className="text-right">Acciones</span>
          </div>

          {/* Fila de ejemplo 1 */}
          <div className="grid grid-cols-4 items-center py-3 border-b text-sm text-gray-700">
            <span>Diseño de interfaz</span>
            <span className="text-amber-600 font-medium">En proceso</span>
            <span>24/08/2026</span>
            <div className="flex justify-end gap-3 text-gray-500">
              <button className="hover:text-blue-600"><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button className="hover:text-red-600"><FontAwesomeIcon icon={faTrash} /></button>
              <button className="hover:text-gray-800"><FontAwesomeIcon icon={faEye} /></button>
            </div>
          </div>

          {/* Fila de ejemplo 2 */}
          <div className="grid grid-cols-4 items-center py-3 border-b text-sm text-gray-700">
            <span>Revisión de componentes</span>
            <span className="text-green-600 font-medium">Completado</span>
            <span>23/08/2026</span>
            <div className="flex justify-end gap-3 text-gray-500">
              <button className="hover:text-blue-600"><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button className="hover:text-red-600"><FontAwesomeIcon icon={faTrash} /></button>
              <button className="hover:text-gray-800"><FontAwesomeIcon icon={faEye} /></button>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Panel lateral */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
          <p className="text-gray-400 text-sm text-center mt-10">
            Selecciona una tarea o haz clic en "Añadir tarea" para ver el detalle aquí.
          </p>
        </div>

      </div>
    </div>
  );
}