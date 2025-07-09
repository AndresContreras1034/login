 import { useState } from "react";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const isPasswordValid = Object.values(rules).every(Boolean);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-md p-10 bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(31,38,135,0.45)]">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 drop-shadow-sm tracking-tight leading-tight">
          Iniciar sesión
        </h2>

        <form className="space-y-8">
          <div className="flex flex-col gap-2">
            <label className="block font-semibold text-gray-700 text-sm tracking-wide">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500 shadow-inner hover:shadow-md"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block font-semibold text-gray-700 text-sm tracking-wide">
              Contraseña
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500 shadow-inner hover:shadow-md"
              placeholder="Tu contraseña"
            />

            <ul className="mt-4 space-y-2 text-sm font-medium">
              <PasswordRule label="Mínimo 8 caracteres" valid={rules.length} />
              <PasswordRule label="Una letra mayúscula" valid={rules.uppercase} />
              <PasswordRule label="Una letra minúscula" valid={rules.lowercase} />
              <PasswordRule label="Un número" valid={rules.number} />
              <PasswordRule label="Un carácter especial" valid={rules.special} />
            </ul>
          </div>

          <button
            type="submit"
            disabled={!isPasswordValid}
            className={`w-full py-3 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 tracking-wide ${
              isPasswordValid
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-[1.02]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

function PasswordRule({ label, valid }) {
  return (
    <li
      className={`flex items-center gap-3 transition-all duration-300 ${
        valid ? "text-green-600" : "text-red-500"
      }`}
    >
      <span
        className={`text-lg font-bold transition-transform duration-300 ${
          valid ? "scale-110" : "scale-100"
        }`}
      >
        {valid ? "✓" : "✗"}
      </span>
      <span className="transition-opacity duration-300">{label}</span>
    </li>
  );
}
