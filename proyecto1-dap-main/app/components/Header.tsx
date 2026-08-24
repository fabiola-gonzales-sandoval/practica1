"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBell,
  faMagnifyingGlass,
  faLayerGroup,
  faHouse,
  faChartSimple,
  faUser,
  faFolderOpen,
  faCheckDouble,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/", icon: faHouse, iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white" },
    { name: "Dashboard", href: "/dashboard", icon: faChartSimple, iconBg: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" },
    { name: "Perfil", href: "/dashboard/profile", icon: faUser, iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white" },
    { name: "Proyectos", href: "/dashboard/projects", icon: faFolderOpen, iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white" },
    { name: "Tareas", href: "/dashboard/tasks", icon: faCheckDouble, iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white" },
    { name: "Usuarios", href: "/dashboard/users", icon: faUsers, iconBg: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 border-b border-slate-800/80 px-6 py-3.5 shadow-xl shadow-slate-950/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        {/* Brand / Isotipo con Gradiente Vivo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 text-white shadow-md shadow-indigo-500/30">
            <FontAwesomeIcon icon={faLayerGroup} className="text-base" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white tracking-tight leading-none">
              Task<span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Flow</span>
            </h1>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Navegación con Tarjetas e Íconos Coloreados */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-lg transition-colors ${
                    isActive ? "bg-white/20 text-white" : item.iconBg
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-[11px]" />
                </div>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Acciones Derecha (Búsqueda, Notificaciones, Avatar y Logout) */}
        <div className="flex items-center gap-3">
          
          {/* Botón de Búsqueda Destacado */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-3 text-xs text-slate-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3.5 py-2 rounded-xl transition-all shadow-sm"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs text-indigo-400" />
            <span className="text-slate-300 font-medium">Buscar...</span>
            <kbd className="text-[9px] font-bold bg-slate-950 border border-slate-700/60 text-slate-400 px-1.5 py-0.5 rounded-md">
              ⌘K
            </kbd>
          </button>

          {/* Botón Notificaciones */}
          <button
            type="button"
            aria-label="Notificaciones"
            className="relative p-2.5 text-slate-400 hover:text-amber-400 hover:bg-slate-900 rounded-xl transition-all border border-transparent hover:border-slate-800"
          >
            <FontAwesomeIcon icon={faBell} className="text-sm" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full ring-2 ring-slate-950 animate-pulse" />
          </button>

          <div className="h-5 w-px bg-slate-800" />

          {/* Perfil del Usuario con Gradiente */}
          <div className="flex items-center gap-3 bg-slate-900/80 pl-1.5 pr-3 py-1 rounded-full border border-slate-800/80">
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center shadow-xs">
                AD
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-950" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold text-white leading-tight">Admin User</p>
              <p className="text-[10px] text-emerald-400 font-medium">En línea</p>
            </div>
          </div>

          {/* Botón Salir */}
          <Link
            href="/login"
            title="Cerrar sesión"
            className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-sm" />
          </Link>

        </div>

      </div>
    </header>
  );
}