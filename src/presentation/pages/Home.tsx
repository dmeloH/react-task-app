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

/**
 * Página principal de la aplicación de tareas.
 * 
 * Administra el estado de las tareas y las operaciones de CRUD (crear, leer, actualizar, eliminar).
 * También gestiona el componente de carga inicial y las notificaciones con SweetAlert.
 *
 * @returns Un componente de React que representa la interfaz principal de la lista de tareas.
 */
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  // Carga inicial de tareas al montar el componente
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

  /**
   * Agrega una nueva tarea al estado.
   * 
   * @param title - El título de la tarea a agregar.
   */
  const handleAdd = async (title: string) => {
    if (!title.trim()) {
      Swal.fire("Campo vacío", "El título no puede estar vacío.", "warning");
      return;
    }

    try {
      const newTask = await addTask(title);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  /**
   * Edita el título de una tarea existente.
   * 
   * @param id - ID de la tarea a modificar.
   * @param title - Nuevo título para la tarea.
   */
  const handleEdit = async (id: number, title: string) => {
    if (!title.trim()) {
      Swal.fire("Campo vacío", "El título no puede estar vacío.", "warning");
      return;
    }

    try {
      await renameTask(id, title);
      setTasks(tasks.map(t => (t.id === id ? { ...t, title } : t)));
    } catch (error) {
      console.error("Error al editar tarea:", error);
    }
  };

  /**
   * Elimina una tarea del estado.
   * 
   * @param id - ID de la tarea a eliminar.
   */
  const handleDelete = async (id: number) => {
    try {
      await removeTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  /**
   * Marca una tarea como completada.
   * 
   * @param id - ID de la tarea a completar.
   */
  const handleComplete = async (id: number) => {
    try {
      await markAsCompleted(id);
      setTasks(tasks.map(t => (t.id === id ? { ...t, isCompleted: true } : t)));
    } catch (error) {
      console.error("Error al completar tarea:", error);
    }
  };

  // Muestra una pantalla de carga mientras se obtienen las tareas
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Cargando tareas...</p>
      </div>
    );

  // Renderizado principal
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
    </div>
  );
}
