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
      <div className="flex items-center justify-between gap-4 bg-white shadow-md p-4 rounded-xl transition-transform duration-300 hover:scale-[1.01]">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onComplete(task.id)}
          className="h-5 w-5 accent-green-600"
        />
        {editing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`flex-1 text-gray-800 ${
              task.isCompleted ? "line-through text-gray-400 italic" : ""
            }`}
          >
            {task.title}
          </span>
        )}
        <div className="flex gap-2">
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
            >
              Guardar
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
            >
              Editar
            </button>
          )}
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Eliminar
          </button>
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
