"use client";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Panel de Administracion</h2>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Menus</p>
      </div>
    </header>
  );
}