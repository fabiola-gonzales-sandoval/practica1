"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrashAlt,
  faEye,
  faArrowLeft,
  faTasks,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "Pendiente" | "En Progreso" | "Completada";
  dueDate: string;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Diseñar la interfaz de usuario",
    description: "Crear el boceto para la sección de tareas del dashboard",
    status: "En Progreso",
    dueDate: "2026-08-28",
  },
  {
    id: "2",
    title: "Conectar endpoints de la API",
    description: "Integrar la llamada GET y POST de tareas",
    status: "Pendiente",
    dueDate: "2026-08-30",
  },
  {
    id: "3",
    title: "Revisión de estilos con Tailwind",
    description: "Ajustar márgenes y colores dinámicos",
    status: "Completada",
    dueDate: "2026-08-24",
  },
];

export default function UserTasksPage() {
  const router = useRouter();
  const [tasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(initialTasks[0]);

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completada":
        return "bg-emerald-100/90 text-emerald-800 border-emerald-300 shadow-2xs";
      case "En Progreso":
        return "bg-amber-100/90 text-amber-900 border-amber-300 shadow-2xs";
      default:
        return "bg-indigo-100/90 text-indigo-800 border-indigo-300 shadow-2xs";
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-slate-50/50 min-h-screen">
      
      {/* Banner de Encabezado con Gradiente Vibrante */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 text-white shadow-lg">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-indigo-900 bg-white/90 hover:bg-white rounded-xl transition-all cursor-pointer shadow-sm backdrop-blur-md"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs text-indigo-600" />
              <span>Volver</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tareas del usuario
            </h1>
            <p className="text-indigo-100 text-xs font-medium">
              Administra y visualiza el avance de tus proyectos en tiempo real.
            </p>
          </div>

          {/* Botón Añadir Tarea (+) Destacado */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-2xl text-xs font-bold transition-all shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 self-start sm:self-auto"
          >
            <span>Añadir tarea</span>
            <FontAwesomeIcon icon={faPlus} className="text-xs bg-indigo-600 text-white rounded-full p-1" />
          </button>
        </div>
      </div>

      {/* Contenedor Principal: Lista/Tabla a la izquierda y Panel a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Tabla de Tareas (2/3 de ancho) */}
        <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-slate-100 text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-4">Tarea</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4">Fecha</th>
                  <th className="p-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {tasks.map((task) => {
                  const isSelected = selectedTask?.id === task.id;
                  return (
                    <tr 
                      key={task.id} 
                      className={`transition-colors ${
                        isSelected ? "bg-indigo-50/60" : "hover:bg-slate-50/80"
                      }`}
                    >
                      <td className="p-4 font-bold text-slate-800">
                        {task.title}
                        <p className="text-[11px] text-slate-400 font-normal truncate max-w-xs mt-0.5">
                          {task.description}
                        </p>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">{task.dueDate}</td>
                      
                      {/* Botones de acción coloridos */}
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
                          <button
                            type="button"
                            title="Editar"
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-2xs cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faEdit} className="text-xs" />
                          </button>
                          <button
                            type="button"
                            title="Eliminar"
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-2xs cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} className="text-xs" />
                          </button>
                          <button
                            type="button"
                            title="Ver Detalle"
                            onClick={() => setSelectedTask(task)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-all shadow-2xs cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faEye} className="text-xs" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel Lateral Derecho Con Tarjetas de Color (1/3 de ancho) */}
        <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-sm h-fit space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <FontAwesomeIcon icon={faTasks} className="text-indigo-600 text-xs" />
              <span>Detalle de la Tarea</span>
            </h2>
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          </div>

          {selectedTask ? (
            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-1">
                <span className="text-indigo-600 text-[10px] uppercase font-extrabold tracking-wider">Título</span>
                <p className="font-bold text-slate-900 text-sm leading-snug">{selectedTask.title}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/80 border border-slate-200/60 space-y-1">
                <span className="text-slate-400 text-[10px] uppercase font-extrabold tracking-wider">Descripción</span>
                <p className="text-slate-600 leading-relaxed font-medium">{selectedTask.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                  <span className="text-purple-600 text-[10px] uppercase font-extrabold tracking-wider block">Estado</span>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusColor(selectedTask.status)}`}>
                    {selectedTask.status}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100 space-y-1">
                  <span className="text-pink-600 text-[10px] uppercase font-extrabold tracking-wider block">Entrega</span>
                  <p className="text-slate-800 font-bold flex items-center gap-1.5 mt-0.5">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-pink-500 text-[10px]" />
                    <span>{selectedTask.dueDate}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic text-center py-4">
              Selecciona una tarea con el icono del ojo para ver sus detalles.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}