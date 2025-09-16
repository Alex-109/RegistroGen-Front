"use client"; // Indica que este componente se ejecutará en el lado del cliente

import { supabase } from "@/lib/supabaseClient"; // Importa tu instancia de Supabase

// Define el componente funcional de la página
export default function Page() {
  // Función asíncrona para probar la conexión a Supabase
  const testConnection = async () => {
    const { data, error } = await supabase.from("tecnico").select("*").limit(1);
    if (error) {
      console.error("Error de conexión a Supabase:", error.message);
    } else {
      console.log("Conexión a Supabase exitosa:", data);
    }
  };

  // Función asíncrona para iniciar sesión con Google
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Pruebas de Supabase y Autenticación</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={testConnection}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Probar Conexión a Supabase
        </button>
        <button
          onClick={loginWithGoogle}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Iniciar Sesión con Google
        </button>
      </div>
    </>
  );
}
