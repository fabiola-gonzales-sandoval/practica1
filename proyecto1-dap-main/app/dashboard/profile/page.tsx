"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faShieldHalved,
  faBuilding,
  faKey,
  faSave,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      {/* Botón Retroceder y Encabezado */}
      <div className="flex flex-col gap-3">
        <div>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            <span>Volver</span>
          </button>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Perfil de Usuario</h1>
          <p className="text-sm text-slate-500 mt-1">
            Administra tu información personal y preferencias de cuenta.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tarjeta de Avatar y Resumen con Degradado */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm h-fit">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-violet-600 to-purple-500 text-white flex items-center justify-center text-2xl font-bold shadow-md mb-4 border-2 border-white ring-2 ring-indigo-100">
              AD
            </div>
            <span className="absolute bottom-4 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <h2 className="text-base font-bold text-slate-900">Admin User</h2>
          <p className="text-xs text-slate-500 mt-0.5">admin@empresa.com</p>
          
          <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
            <FontAwesomeIcon icon={faShieldHalved} className="text-[11px] text-violet-600" />
            Administrador
          </span>
        </div>

        {/* Formulario de Información Personal */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Detalles de la Cuenta
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Nombre completo
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800"
                  />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Correo electrónico
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    defaultValue="admin@empresa.com"
                    className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800"
                  />
                </div>
              </div>

              {/* Organización */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Organización
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-indigo-500 text-xs">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <input
                    type="text"
                    defaultValue="TaskFlow Inc."
                    className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50/50 text-slate-800"
                  />
                </div>
              </div>

              {/* Rol */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Rol asignado
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                  <input
                    type="text"
                    defaultValue="Super Admin"
                    disabled
                    className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-100 text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Botón de Guardar */}
            <div className="pt-4 flex justify-end border-t border-slate-100">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
              >
                <FontAwesomeIcon icon={faSave} className="text-xs" />
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}