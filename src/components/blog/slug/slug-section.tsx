import Image from 'next/image';

import { ContentBlog } from './content-blog';
import { HeaderBlog } from './header-blog';

import { BlogPost } from '@/models/blog.model';
import { User } from '@/models/user.model';

interface SlugSectionProps {
  post: BlogPost;
  otherPosts: BlogPost[];
  author: User | null;
}

export default async function SlugSection({ post, author }: SlugSectionProps) {
  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      {/* Header */}
      <HeaderBlog post={post} author={author} />

      {/* Cover Image */}
      {post.coverImage && !post.coverImage.includes('placeholder') && (
        <div className='relative aspect-video rounded-lg overflow-hidden'>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className='object-cover'
            priority
          />
        </div>
      )}

      {/* Content */}
      <ContentBlog post={post} />
    </div>
  );
}
