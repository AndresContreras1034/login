# LoginApp — React + TailwindCSS

Una interfaz moderna de inicio de sesión construida con React, Vite y TailwindCSS. Totalmente responsive, con validación de contraseña en tiempo real, clases reutilizables y diseño tipo glassmorphism.

---

## Índice

1. Características
2. Vista previa
3. Requisitos
4. Instalación
5. Estructura del proyecto
6. Personalización
7. Reglas de contraseña
8. Licencia
9. Autor

---

## 1. Características

- Estética moderna basada en TailwindCSS
- Validación visual de contraseña con retroalimentación en tiempo real
- Diseño responsive para todos los dispositivos
- Estilo glassmorphism para formularios
- Transiciones suaves y experiencia de usuario mejorada
- Arquitectura escalable con componentes reutilizables
- Construido con Vite y React 18

---

## 2. Vista previa

Puedes añadir una imagen o gif aquí:

```
![Vista previa](./preview.png)
```

---

## 3. Requisitos

- Node.js 18 o superior
- npm 9 o superior

---

## 4. Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AndresContreras1034/login.git
cd login

# Instalar dependencias
npm install

# Iniciar el servidor en desarrollo
npm run dev
```

---

## 5. Estructura del proyecto

```
login-app/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  └─ LoginForm.jsx
│  ├─ styles/
│  │  └─ tailwind.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

---

## 6. Personalización

- Los colores, fuentes y sombras se configuran en `tailwind.config.js`.
- Los estilos globales como fondo, scrollbar y transiciones están en `src/styles/tailwind.css`.
- Los componentes usan clases como `.btn-primary`, `.input`, `.glass`, que puedes reutilizar o modificar.
- Las animaciones personalizadas como `fade-in-up` también están incluidas.

---

## 7. Reglas de contraseña

Estas reglas se aplican y se muestran en tiempo real dentro del formulario:

- Mínimo 8 caracteres
- Al menos una letra mayúscula
- Al menos una letra minúscula
- Al menos un número
- Al menos un carácter especial

---

## 8. Licencia

MIT — Libre para uso personal y comercial con atribución.

---

## 9. Autor
Andres Contreras
Ingeniero de Sistemas | Backend | Análisis de Datos | Cloud Computing  
GitHub: [AndresContreras1034](https://github.com/AndresContreras1034)
