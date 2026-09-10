export type ProjectStatus =
  | 'Live'
  | 'Shipping'
  | 'Building'
  | 'Exploring'
  | 'Paused'
  | 'Archived'
  | 'Template';
export interface ProjectSection {
  title: string;
  body: string;
  items?: string[];
}
export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  kind: 'Product' | 'Client';
  status?: ProjectStatus;
  image: string;
  alt: string;
  color: string;
  url?: string;
  technologies: string[];
  sections: ProjectSection[];
}
export interface NdaWork {
  count: number;
}
export interface Experiment {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
  status?: ProjectStatus;
  technologies?: string[];
}
export type ArticleCategory =
  | 'Building'
  | 'Engineering'
  | 'Design'
  | 'Learning'
  | 'Journal'
  | 'Case studies'
  | 'Lab notes';
export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  published: boolean;
  date?: string;
  content: string;
  readingMinutes: number;
}
export interface Technology {
  category: string;
  items: string[];
}
export interface SocialLink {
  label: string;
  url: string;
}
export interface CurrentActivity {
  label: string;
  value: string;
  detail: string;
  href?: string;
}
