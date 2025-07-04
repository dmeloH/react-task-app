import { fetchTasks } from "../../infrastructure/api/taskApi";
export const getTasks = async () => await fetchTasks();