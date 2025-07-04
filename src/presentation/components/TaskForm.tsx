import { useState } from "react";

export default function TaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("El título no puede estar vacío");
      return;
    }

    onAdd(title);
    setTitle("");
    setError(""); // limpiar error si todo sale bien
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (error) setError(""); // limpiar el error mientras escribe
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 bg-white shadow-md p-4 rounded-xl mb-6"
    >
      <div className="flex gap-4 items-center">
        <input
          value={title}
          onChange={handleChange}
          placeholder="Nueva tarea"
          className={`flex-1 border px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Agregar
        </button>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </form>
  );
}
