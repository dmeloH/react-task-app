import { useState } from "react";

export default function TaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
