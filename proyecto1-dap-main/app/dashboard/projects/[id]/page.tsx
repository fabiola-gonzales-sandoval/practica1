"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFolderOpen,
  faCheckCircle,
  faClock,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      {/* Botón Volver y Encabezado */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 rounded-xl transition-all cursor-pointer shadow-xs"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
          <span>Volver a Proyectos</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Proyecto #{id}
            </span>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Rediseño de Plataforma Web
            </h1>
          </div>

          <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            En Progreso
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel Principal */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-2">Descripción del Proyecto</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Este proyecto tiene como objetivo rediseñar por completo la arquitectura visual y técnica de la plataforma web corporativa, optimizando tiempos de carga y mejorando la experiencia de usuario.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900 mb-3">Progreso General</h2>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Completado</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-600 h-full rounded-full w-[65%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Panel Lateral de Información */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-fit space-y-4">
          <h2 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-100">
            Detalles Rápidos
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-3 text-slate-600">
              <FontAwesomeIcon icon={faUser} className="text-indigo-500 w-4" />
              <span>Líder: <strong>Admin User</strong></span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <FontAwesomeIcon icon={faClock} className="text-indigo-500 w-4" />
              <span>Entrega: <strong>30 Nov, 2026</strong></span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 w-4" />
              <span>Tareas: <strong>12 / 18 completadas</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}