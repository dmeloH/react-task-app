/**
 * Agrega una nueva tarea utilizando el título proporcionado.
 * 
 * Esta función valida que el título no esté vacío. Si el título está vacío,
 * muestra una alerta utilizando SweetAlert2 y lanza un error.
 * Si el título es válido, llama a la función `createTask` para crear la tarea.
 * 
 * @param title - El título de la tarea a agregar.
 * @returns Una promesa que resuelve con la tarea creada.
 * @throws Error si el título está vacío.
 */
import Swal from "sweetalert2";
import { createTask } from "../../infrastructure/api/taskApi";

export const addTask = async (title: string) => {
  if (!title.trim()) {
    Swal.fire("Campo vacío", "El título de la tarea no puede estar vacío.", "warning");
    throw new Error("Título vacío");
  }

  return await createTask(title);
};
