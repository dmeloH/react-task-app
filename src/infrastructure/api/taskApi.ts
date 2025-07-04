import axios from "axios";
import type { Task } from "../../core/domain/models/Task";

const API_URL = "https://localhost:7277/api/Tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (title: string): Promise<Task> => {
  const res = await axios.post(API_URL, { title, isCompleted: false });
  return res.data;
};

export const updateTaskTitle = async (id: number, title: string): Promise<void> => {
  // Debes enviar el objeto completo con título actualizado
  await axios.put(`${API_URL}/${id}`, { title });
};

export const completeTask = async (id: number): Promise<void> => {
  await axios.put(`${API_URL}/${id}/complete`);
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
