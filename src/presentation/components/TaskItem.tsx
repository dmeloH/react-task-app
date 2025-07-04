import { useState } from "react";
import type { Task } from "../../core/domain/models/Task";

interface Props {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export default function TaskItem({ task, onComplete, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    onEdit(task.id, newTitle);
    setEditing(false);
  };

  return (
    <li className={`task-item fade-in`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onComplete(task.id)}
      />
      {editing ? (
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      ) : (
        <span className={task.isCompleted ? "completed" : ""}>{task.title}</span>
      )}
      {editing ? (
        <button onClick={handleEdit}>Guardar</button>
      ) : (
        <button onClick={() => setEditing(true)}>Editar</button>
      )}
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}
