import { createTask } from "../../infrastructure/api/taskApi";
export const addTask = async (title: string) => await createTask(title);