import axios from "axios";
import type { Task } from "../../core/domain/models/Task";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (title: string): Promise<Task> => {
  const res = await axios.post(API_URL, { title });
  return res.data;
};

export const updateTaskTitle = async (id: number, title: string) => {
  await axios.put(`${API_URL}/${id}/title`, { title });
};

export const completeTask = async (id: number) => {
  await axios.put(`${API_URL}/${id}/complete`);
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
