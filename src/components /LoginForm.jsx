import { useState } from "react";

export default function LoginForm() {
  const [password, setPassword] = useState("");

  // Validaciones
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

      <form className="space-y-5">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Correo</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu contraseña"
          />

          <ul className="mt-3 space-y-1 text-sm">
            <PasswordRule label="Mínimo 8 caracteres" valid={rules.length} />
            <PasswordRule label="Una letra mayúscula" valid={rules.uppercase} />
            <PasswordRule label="Una letra minúscula" valid={rules.lowercase} />
            <PasswordRule label="Un número" valid={rules.number} />
            <PasswordRule label="Un carácter especial" valid={rules.special} />
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

// Componente de validación visual
function PasswordRule({ label, valid }) {
  return (
    <li className={`flex items-center gap-2 ${valid ? "text-green-600" : "text-red-500"}`}>
      <span>{valid ? "✓" : "✗"}</span>
      <span>{label}</span>
    </li>
  );
}
