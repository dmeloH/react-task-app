/**
 * Obtiene la lista de tareas desde la API.
 *
 * Esta función es una función asíncrona que llama a `fetchTasks` para recuperar
 * todas las tareas disponibles desde la capa de infraestructura.
 *
 * @returns {Promise<any>} Una promesa que resuelve con la lista de tareas obtenidas.
 */
import { fetchTasks } from "../../infrastructure/api/taskApi";
export const getTasks = async () => await fetchTasks();