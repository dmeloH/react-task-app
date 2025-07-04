/**
 * Lista de tareas que renderiza una colección de componentes `TaskCard`.
 *
 * @param tasks - Arreglo de tareas a mostrar.
 * @param onEdit - Función que se llama al editar una tarea, recibe el id y el nuevo título.
 * @param onDelete - Función que se llama al eliminar una tarea, recibe el id de la tarea.
 * @param onComplete - Función que se llama al marcar una tarea como completada, recibe el id de la tarea.
 *
 * @returns Un contenedor con la lista de tareas renderizadas.
 */
import type { Task } from "../../core/domain/models/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

export default function TaskList({ tasks, onEdit, onDelete, onComplete }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}