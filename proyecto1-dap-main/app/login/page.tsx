"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-black">LOGIN</h1>
        <input type="text" placeholder="USUARIO" className="bg-gray-200 p-3 rounded" required />
        <input type="password" placeholder="CONTRASEÑA" className="bg-gray-200 p-3 rounded" required />
        <button type="submit" className="bg-black text-white py-3 rounded font-bold">INGRESAR</button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        ¿No tienes cuenta? <Link href="/register" className="font-bold underline text-black">Regístrate</Link>
      </p>
    </main>
  );
}