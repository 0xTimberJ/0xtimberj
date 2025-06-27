import { BlogPost } from "@/models/blog.model";
import { BlogSearchContainer } from "./blog-search-container";

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

export const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My thoughts on web development, new technologies and my projects.
          Sharing experiences and best practices.
        </p>
      </div>

      {/* Blog Search & Posts */}
      <BlogSearchContainer blogPosts={blogPosts} />
    </>
  );
};
