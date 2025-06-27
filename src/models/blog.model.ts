export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  readTime: string;
  published: boolean;
  metaDescription: string;
  author: string;
  created: string;
  updated: string;
}
