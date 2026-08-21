"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-black">REGISTRO</h1>
        <input type="text" placeholder="USUARIO" className="bg-gray-200 p-3 rounded" required />
        <input type="password" placeholder="CONTRASEÑA" className="bg-gray-200 p-3 rounded" required />
        <button type="submit" className="bg-black text-white py-3 rounded font-bold">CREAR CUENTA</button>
      </form>
      <Link href="/login" className="mt-4 text-sm font-bold text-black underline">Volver al Login</Link>
    </main>
  );
}