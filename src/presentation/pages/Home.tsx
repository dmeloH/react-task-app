import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
    getTasks()
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar tareas:", error);
        setLoading(false);
      });
  }, []);

  const handleAdd = async (title: string) => {
    if (!title.trim()) {
      Swal.fire("Campo vacío", "El título no puede estar vacío.", "warning");
      return;
    }

    try {
      const newTask = await addTask(title);
      setTasks([...tasks, newTask]);
      showToast("Tarea agregada");
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  const handleEdit = async (id: number, title: string) => {
    if (!title.trim()) {
      Swal.fire("Campo vacío", "El título no puede estar vacío.", "warning");
      return;
    }

    try {
      await renameTask(id, title);
      setTasks(tasks.map(t => (t.id === id ? { ...t, title } : t)));
      showToast("Tarea editada");
    } catch (error) {
      console.error("Error al editar tarea:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await removeTask(id);
      setTasks(tasks.filter(t => t.id !== id));
      showToast("Tarea eliminada");
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  const handleComplete = async (id: number) => {
    try {
      await markAsCompleted(id);
      setTasks(tasks.map(t => (t.id === id ? { ...t, isCompleted: true } : t)));
      showToast("Tarea completada");
    } catch (error) {
      console.error("Error al completar tarea:", error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Cargando tareas...</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Lista de Tareas
      </h1>

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
