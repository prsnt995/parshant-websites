export type ProjectCategory = 'AI' | 'Website' | 'Android' | 'iOS' | 'Software' | 'Other';

export type ProjectStatus = 'Completed' | 'In Development' | 'Coming Soon';

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  features?: string[];
  image: string;
  screenshots?: string[];
  links: ProjectLinks;
  createdAt: string;
}
