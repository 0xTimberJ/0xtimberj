import { BlogCard } from '../blog-card';

import { BlogPost } from '@/models/blog.model';

interface SuggestionsBlogProps {
  otherPosts: BlogPost[];
}

export const SuggestionsBlog = ({ otherPosts }: SuggestionsBlogProps) => {
  return (
    <div className='grid gap-6 md:grid-cols-3'>
      {otherPosts.map((otherPost) => (
        <BlogCard key={otherPost.id} post={otherPost} />
      ))}
    </div>
  );
};
