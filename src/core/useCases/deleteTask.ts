/**
 * Elimina una tarea dado su identificador.
 *
 * @param id - El identificador numérico de la tarea a eliminar.
 * @returns Una promesa que se resuelve cuando la tarea ha sido eliminada.
 */
import { deleteTask } from "../../infrastructure/api/taskApi";
export const removeTask = async (id: number) => await deleteTask(id);