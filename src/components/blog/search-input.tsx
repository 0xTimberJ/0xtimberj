"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  clearSearch: () => void;
  placeholder?: string;
}

export const SearchInput = ({ 
  onSearch, 
  query,
  setQuery,
  clearSearch,
  placeholder = "Search the blog" 
}: SearchInputProps) => {

  const handleInputChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
          className="w-full pl-10 pr-10 h-11 text-sm border-muted-foreground/20 focus-visible:ring-1"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted/50"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
    </div>
  );
}; 