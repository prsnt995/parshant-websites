import { Project } from "@/types/project";
import { initialProjects } from "@/config/projects";

const STORAGE_KEY = "noeul_enterprises_projects_v1";

export function getStoredProjects(): Project[] {
  if (typeof window === "undefined") {
    return initialProjects;
  }
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    if (!item) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
      return initialProjects;
    }
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialProjects;
  } catch (error) {
    console.error("Error reading projects from storage:", error);
    return initialProjects;
  }
}

export function saveProjectsToStorage(projects: Project[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.error("Error saving projects to storage:", error);
  }
}

export function resetProjectsToDefault(): Project[] {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
  }
  return initialProjects;
}
