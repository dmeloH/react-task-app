import { completeTask } from "../../infrastructure/api/taskApi";
export const markAsCompleted = async (id: number) => await completeTask(id);