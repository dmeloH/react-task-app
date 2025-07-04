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
    <div className="task-list">
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
