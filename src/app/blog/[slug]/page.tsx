import { notFound } from 'next/navigation';

import SlugSection from '@/components/blog/slug/slug-section';
import { WrapperPage } from '@/components/wrapper/wrapper-page';
import { getBlogPost, getBlogPosts } from '@/services/blog.services';
import { getUser } from '@/services/user.services';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    notFound();
  }

  // Get other posts for suggestions
  const allPosts = await getBlogPosts();
  const otherPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const author = await getUser(post.author);

  return (
    <WrapperPage>
      <SlugSection post={post} otherPosts={otherPosts} author={author} />
    </WrapperPage>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
      publishedTime: post.created,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

// Generate static paths for better performance
export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
