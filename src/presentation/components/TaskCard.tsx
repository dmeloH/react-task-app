import { useState } from "react";
import type { Task } from "../../core/domain/models/Task";
import ConfirmModal from "./ConfirmModal";

interface Props {
  task: Task;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onComplete }: Props) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = () => {
    onEdit(task.id, newTitle);
    setEditing(false);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowConfirm(false);
  };

  return (
    <>
      <div className="task-card fade-in">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onComplete(task.id)}
        />
        {editing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span className={task.isCompleted ? "completed" : ""}>{task.title}</span>
        )}
        <div className="actions">
          {editing ? (
            <button onClick={handleSave}>Guardar</button>
          ) : (
            <button onClick={() => setEditing(true)}>Editar</button>
          )}
          <button onClick={() => setShowConfirm(true)}>Eliminar</button>
        </div>
      </div>
      {showConfirm && (
        <ConfirmModal
          message="¿Estás seguro de eliminar esta tarea?"
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
