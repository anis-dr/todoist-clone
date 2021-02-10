import { collatedTasks } from "../constants";

export const collatedTasksExist = (selectedProjects) =>
  collatedTasks.find((task) => task.key === selectedProjects);

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);
