"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFolderOpen,
  faArrowLeft,
  faChevronRight,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const sampleProjects = [
  {
    id: "1",
    title: "Rediseño de Plataforma Web",
    description: "Actualización de interfaz de usuario y optimización de rendimiento.",
    status: "En Progreso",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    progress: 65,
  },
  {
    id: "2",
    title: "Migración a la Nube",
    description: "Transferencia de microservicios e infraestructura a servicios AWS.",
    status: "Completado",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    progress: 100,
  },
  {
    id: "3",
    title: "App Móvil iOS & Android",
    description: "Desarrollo de aplicación nativa multiplataforma con React Native.",
    status: "Pendiente",
    statusColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    progress: 15,
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      {/* Botón Volver y Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            <span>Volver</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Proyectos</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Gestiona y supervisa el progreso de todos los proyectos activos.
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/projects/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <FontAwesomeIcon icon={faPlus} className="text-xs" />
          <span>Nuevo Proyecto</span>
        </Link>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <FontAwesomeIcon icon={faFolderOpen} className="text-base" />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-900 mb-1">{project.title}</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{project.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              {/* Barra de Progreso */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                  <span>Progreso</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-violet-600 h-full rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <Link
                href={`/dashboard/projects/${project.id}`}
                className="flex items-center justify-between w-full pt-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>Ver Detalles</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}