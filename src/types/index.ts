export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  category?: string;
  details?: {
    onDemand: string;
    allImages: string[];
  };
}
