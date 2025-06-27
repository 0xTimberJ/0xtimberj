

import { BlogPost } from '@/models/blog.model';
import { BlogCard } from './blog-card';

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

export const BlogList = ({ blogPosts }: BlogSectionProps) => {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};
