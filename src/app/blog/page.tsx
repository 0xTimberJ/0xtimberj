import { BlogSection } from "@/components/blog/blog-section";
import { WrapperPage } from "@/components/wrapper/wrapper-page";
import { getBlogPosts } from "../../services/blog.services";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return (
    <WrapperPage>
      <BlogSection blogPosts={blogPosts} />
    </WrapperPage>
  );
}
