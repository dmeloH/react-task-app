import Swal from "sweetalert2";
import { updateTaskTitle } from "../../infrastructure/api/taskApi";

export const renameTask = async (id: number, title: string) => {
  if (!title.trim()) {
    Swal.fire("Campo vacío", "El nuevo título de la tarea no puede estar vacío.", "warning");
    throw new Error("Título vacío");
  }

  await updateTaskTitle(id, title);
};
