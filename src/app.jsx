import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 p-6 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      {/* Contenido principal */}
      <div className="z-10 w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </div>
  );
}
