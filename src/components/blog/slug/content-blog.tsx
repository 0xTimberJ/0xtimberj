import { MarkdownRenderer } from '@/lib/markdown-renderer';
import { BlogPost } from '@/models/blog.model';

interface ContentBlogProps {
  post: BlogPost;
}

export const ContentBlog = ({ post }: ContentBlogProps) => {
  return (
    <article className='max-w-none'>
      <MarkdownRenderer
        content={post.content}
        className='prose-neutral dark:prose-invert'
      />
    </article>
  );
};
