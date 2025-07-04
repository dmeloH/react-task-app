import { completeTask } from "../../infrastructure/api/taskApi";
/**
 * Marca una tarea como completada dado su identificador.
 *
 * @param id - El identificador único de la tarea a completar.
 * @returns Una promesa que se resuelve cuando la tarea ha sido marcada como completada.
 */
export const markAsCompleted = async (id: number) => await completeTask(id);