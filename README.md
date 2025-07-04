
# ✅ Task List - Frontend (React + TypeScript + Vite + Tailwind CSS)

Interfaz web moderna para gestionar tareas, desarrollada con **React**, **TypeScript**, **Tailwind CSS**, **Vite** y principios de **arquitectura limpia**. Este proyecto representa la capa frontend de una aplicación fullstack. Requiere un backend funcional desarrollado en .NET para operar correctamente.

---

## 📌 Características

- Arquitectura limpia: separación clara entre `core`, `useCases`, `infrastructure` y `presentation`.
- Estilos modernos y responsivos con **Tailwind CSS**.
- Animaciones suaves con CSS puro para transiciones, modales y notificaciones.
- Componentes reutilizables (`TaskCard`, `Toast`, `ConfirmModal`, etc.).
- Notificaciones flotantes y confirmación antes de eliminar tareas.

---

## ⚙️ Requisitos

- Node.js 18+
- NPM o Yarn
- Backend corriendo en: `http://localhost:7277/api/tasks` (por defecto)

---

## 🚀 Instrucciones para ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/dmeloH/react-task-app.git
cd react-task-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

Se abrirá en: `http://localhost:5173`

---

## 🔁 Conexión con el Backend

Este frontend requiere que el backend esté activo en:

```
http://localhost:7277/api/tasks
```

> Puedes ajustar la URL en `src/infrastructure/api/taskApi.ts` si tu backend usa otro puerto o dominio.

---

## 🧱 Estructura de Carpetas

```
src/
├── core/
│   ├── domain/
│   │   └── models/Task.ts
│   └── useCases/
│       ├── getTasks.ts
│       ├── addTask.ts
│       ├── updateTaskTitle.ts
│       ├── completeTask.ts
│       └── deleteTask.ts
├── infrastructure/
│   └── api/taskApi.ts
├── presentation/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── pages/
│   │   └── Home.tsx
│   └── styles/
│       └── animations.css
├── App.tsx
├── main.tsx
└── index.css
```

---

## 👩‍💻 Autoría

**Daniela Melo**  
_Desarrolladora Full Stack_

📅 Versión: `0.3`  
📌 Fecha: `03/07/2025`

---

## 📄 Licencia

Este proyecto es solo para fines educativos o de evaluación técnica.
