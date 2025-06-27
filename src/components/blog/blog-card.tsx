import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/models/blog.model";
import { CalendarDaysIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link key={post.id} href={`/blog/${post.slug}`}>
          <Card className='group hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden h-full cursor-pointer pt-0'>
            <div className='relative overflow-hidden'>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={400}
                height={200}
                className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute top-4 left-4'>
                <Badge variant='secondary'>{post.tags[0]}</Badge>
              </div>
            </div>

            <CardHeader>
              <div className='flex items-center gap-4 text-sm text-muted-foreground mb-2'>
                <div className='flex items-center gap-1'>
                  <CalendarDaysIcon className='size-4' />
                  {new Date(post.created).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className='flex items-center gap-1'>
                  <ClockIcon className='size-4' />
                  {post.readTime}
                </div>
              </div>

              <CardTitle className='text-xl line-clamp-2'>
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent className='pt-0'>
              <CardDescription className='text-muted-foreground line-clamp-3 mb-4'>
                {post.excerpt}
              </CardDescription>

              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <UserIcon className='size-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    {post.author}
                  </span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2'>
                {post.tags.slice(1).map((tag) => (
                  <Badge key={tag} variant='outline' className='text-xs'>
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
  );
};