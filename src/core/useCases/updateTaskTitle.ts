import Swal from "sweetalert2";
import { updateTaskTitle } from "../../infrastructure/api/taskApi";

/**
 * Cambia el título de una tarea existente.
 *
 * @param id - El identificador único de la tarea a renombrar.
 * @param title - El nuevo título que se asignará a la tarea.
 * @throws Error Si el título proporcionado está vacío o solo contiene espacios.
 *
 * Muestra una alerta utilizando Swal si el título está vacío.
 * Llama a la función `updateTaskTitle` para actualizar el título de la tarea.
 */
export const renameTask = async (id: number, title: string) => {
  if (!title.trim()) {
    Swal.fire("Campo vacío", "El nuevo título de la tarea no puede estar vacío.", "warning");
    throw new Error("Título vacío");
  }

  await updateTaskTitle(id, title);
};
