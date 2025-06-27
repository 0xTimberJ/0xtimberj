'use client';

import { ArrowLeft, CalendarDays, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { BlogPost } from '@/models/blog.model';
import { User } from '@/models/user.model';

interface HeaderBlogProps {
  post: BlogPost;
  author: User | null;
}

export const HeaderBlog = ({ post, author }: HeaderBlogProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className='space-y-6'>
      <Link
        href='/blog'
        className='inline-flex items-center gap-2  text-sm text-muted-foreground'
      >
        <ArrowLeft className='size-4' />
        Back to Blog
      </Link>

      {/* Post Meta */}
      <div className=''>
        <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4'>
          <div className='flex items-center gap-1'>
            <CalendarDays className='size-4' />
            {new Date(post.created).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='size-4' />
            {post.readTime}
          </div>
        </div>

        <div className='flex flex-wrap gap-2 '>
          {post.tags.map((tag) => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className='text-4xl md:text-5xl font-bold tracking-tight leading-tight'>
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className='text-xl leading-relaxed mb-8'>{post.excerpt}</p>

      {/* Author & Share */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Avatar>
            <AvatarImage src={author?.avatar} alt={author?.name} />
            <AvatarFallback>{author?.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm font-medium'>{author?.name}</p>
            <p className='text-xs text-muted-foreground'>Author</p>
          </div>
        </div>

        <Tooltip open={copied ? true : undefined}>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size='sm'
              className='gap-2'
              onClick={handleCopyLink}
            >
              <Share2 className='size-4' />
              Share
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? 'Copied!' : 'Copy link'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
