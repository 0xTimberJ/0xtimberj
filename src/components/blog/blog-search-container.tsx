"use client";

import { BlogPost } from "@/models/blog.model";
import { useMemo, useState } from "react";
import { BlogList } from "./blog-list";
import { SearchInput } from "./search-input";

interface BlogSearchContainerProps {
  blogPosts: BlogPost[];
}

export const BlogSearchContainer = ({ blogPosts }: BlogSearchContainerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return blogPosts;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return blogPosts.filter((post) => {
      // Search in title
      const titleMatch = post.title?.toLowerCase().includes(query);
      
      // Search in excerpt
      const excerptMatch = post.excerpt?.toLowerCase().includes(query);
      
      // Search in tags
      const tagsMatch = post.tags?.some((tag) => 
        tag.toLowerCase().includes(query)
      );
      
      // Search in content (limited to first 500 chars for performance)
      const contentMatch = post.content?.toLowerCase().slice(0, 500).includes(query);
      
      return titleMatch || excerptMatch || tagsMatch || contentMatch;
    });
  }, [blogPosts, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="flex flex-col gap-4 w-full">
        <SearchInput onSearch={handleSearch} query={query} setQuery={setQuery} clearSearch={clearSearch} />
        
        {/* Results count */}
        <div className="text-center text-sm text-muted-foreground">
          {searchQuery ? (
            <span>
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
              {filteredPosts.length !== blogPosts.length && ` out of ${blogPosts.length}`}
            </span>
          ) : (
            <span>{blogPosts.length} post{blogPosts.length !== 1 ? 's' : ''} total</span>
          )}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <BlogList blogPosts={filteredPosts} />
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            <p className="text-lg font-medium mb-2">No posts found</p>
            <p className="text-sm">
              Try adjusting your search terms or{" "}
              <button 
                onClick={clearSearch}
                className="text-primary hover:underline cursor-pointer"
              >
                clear the search
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}; 