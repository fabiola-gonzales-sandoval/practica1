"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFolderPlus,
  faSave,
  faCalendarAlt,
  faAlignLeft
} from "@fortawesome/free-solid-svg-icons";

export default function NewProjectPage() {
  const router = useRouter();

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
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

        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Crear Nuevo Proyecto</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Ingresa la información básica para dar de alta un nuevo proyecto.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <form className="space-y-5">
          {/* Nombre del Proyecto */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Nombre del Proyecto *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                <FontAwesomeIcon icon={faFolderPlus} />
              </span>
              <input
                type="text"
                placeholder="Ej. Rediseño de Plataforma Web"
                required
                className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800"
              />
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Descripción
            </label>
            <div className="relative">
              <span className="absolute top-2.5 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                <FontAwesomeIcon icon={faAlignLeft} />
              </span>
              <textarea
                rows={4}
                placeholder="Describe brevemente los objetivos del proyecto..."
                className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800 resize-none"
              />
            </div>
          </div>

          {/* Estado y Fecha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Estado Inicial
              </label>
              <select className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800">
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Fecha Estimada de Entrega
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <input
                  type="date"
                  className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
            >
              <FontAwesomeIcon icon={faSave} className="text-xs" />
              <span>Guardar Proyecto</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}