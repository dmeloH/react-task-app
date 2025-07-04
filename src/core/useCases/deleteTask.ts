import { deleteTask } from "../../infrastructure/api/taskApi";
export const removeTask = async (id: number) => await deleteTask(id);