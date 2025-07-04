import axios from "axios";
import Swal from "sweetalert2";
import type { Task } from "../../core/domain/models/Task";

const API_URL = "https://localhost:7277/api/Tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

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

export const updateTaskTitle = async (id: number, title: string): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${id}`, { title });
    Swal.fire("Actualizado", "Título actualizado correctamente", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

export const completeTask = async (id: number): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${id}/complete`);
    Swal.fire("Completada", "Tarea marcada como completada", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    Swal.fire("Eliminada", "Tarea eliminada correctamente", "success");
  } catch (error: any) {
    Swal.fire("Error", error.response?.data || error.message, "error");
    throw error;
  }
};
