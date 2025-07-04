import axios from "axios";
import Swal from "sweetalert2";
import type { Task } from "../../core/domain/models/Task";

const API_URL = "https://localhost:7277/api/Tasks";

/**
 * Obtiene la lista completa de tareas desde el backend.
 * 
 * @returns Una promesa que resuelve a un arreglo de objetos `Task`.
 * @throws Muestra una alerta con SweetAlert si ocurre un error en la solicitud.
 */
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

/**
 * Crea una nueva tarea con el título especificado.
 * 
 * @param title - El título de la nueva tarea.
 * @returns Una promesa que resuelve a la tarea creada (`Task`).
 * @throws Muestra una alerta con SweetAlert si ocurre un error en la solicitud.
 */
export const createTask = async (title: string): Promise<Task> => {
  try {
    const res = await axios.post(API_URL, { title, isCompleted: false });
    Swal.fire("Éxito", "Tarea creada correctamente", "success");
    return res.data;
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

/**
 * Actualiza el título de una tarea específica por ID.
 * 
 * @param id - El ID de la tarea a actualizar.
 * @param title - El nuevo título de la tarea.
 * @returns Una promesa que se resuelve cuando la tarea se ha actualizado.
 * @throws Muestra una alerta con SweetAlert si ocurre un error en la solicitud.
 */
export const updateTaskTitle = async (id: number, title: string): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${id}`, { title });
    Swal.fire("Actualizado", "Título actualizado correctamente", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

/**
 * Marca una tarea como completada.
 * 
 * @param id - El ID de la tarea a marcar como completada.
 * @returns Una promesa que se resuelve cuando la tarea se ha completado.
 * @throws Muestra una alerta con SweetAlert si ocurre un error en la solicitud.
 */
export const completeTask = async (id: number): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${id}/complete`);
    Swal.fire("Completada", "Tarea marcada como completada", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

/**
 * Elimina una tarea por su ID.
 * 
 * @param id - El ID de la tarea a eliminar.
 * @returns Una promesa que se resuelve cuando la tarea ha sido eliminada.
 * @throws Muestra una alerta con SweetAlert si ocurre un error en la solicitud.
 */
export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    Swal.fire("Eliminada", "Tarea eliminada correctamente", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};
