import { useEffect, useState } from "react";
import type { Task } from "../../core/domain/models/Task";
import { getTasks } from "../../core/useCases/getTasks";
import { addTask } from "../../core/useCases/addTask";
import { renameTask } from "../../core/useCases/updateTaskTitle";
import { markAsCompleted } from "../../core/useCases/completeTask";
import { removeTask } from "../../core/useCases/deleteTask";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Toast from "../components/Toast";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => setToast(msg);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = async (title: string) => {
    const newTask = await addTask(title);
    setTasks([...tasks, newTask]);
    showToast("Tarea agregada");
  };

  const handleEdit = async (id: number, title: string) => {
    await renameTask(id, title);
    setTasks(tasks.map(t => (t.id === id ? { ...t, title } : t)));
    showToast("Tarea editada");
  };

  const handleDelete = async (id: number) => {
    await removeTask(id);
    setTasks(tasks.filter(t => t.id !== id));
    showToast("Tarea eliminada");
  };

  const handleComplete = async (id: number) => {
    await markAsCompleted(id);
    setTasks(tasks.map(t => (t.id === id ? { ...t, isCompleted: true } : t)));
    showToast("Tarea completada");
  };

  if (loading) return <p>Cargando tareas...</p>;

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}
