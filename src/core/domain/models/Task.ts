/**
 * Representa una tarea dentro de la aplicación.
 *
 * @property {number} id - Identificador único de la tarea.
 * @property {string} title - Título o descripción breve de la tarea.
 * @property {boolean} isCompleted - Indica si la tarea ha sido completada.
 */
export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}
