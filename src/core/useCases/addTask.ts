import Swal from "sweetalert2";
import { createTask } from "../../infrastructure/api/taskApi";

export const addTask = async (title: string) => {
  if (!title.trim()) {
    Swal.fire("Campo vacío", "El título de la tarea no puede estar vacío.", "warning");
    throw new Error("Título vacío");
  }

  return await createTask(title);
};
