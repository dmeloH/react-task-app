import { updateTaskTitle } from "../../infrastructure/api/taskApi";
export const renameTask = async (id: number, title: string) => await updateTaskTitle(id, title);