'use client';

import { CopyIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface CodeBlockProps {
  language: string;
  children: string;
}

function CodeBlock({ language, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy code:', error);
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
    <Card className='my-6 overflow-hidden pt-0'>
      <div className='flex items-center justify-between px-4 py-2 bg-muted border-b'>
        <Badge variant='secondary' className='text-xs'>
          {language}
        </Badge>
        <Tooltip open={copied ? true : undefined}>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size='sm'
              className='gap-2'
              onClick={handleCopy}
            >
              <CopyIcon className='size-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? 'Copied!' : 'Copy code'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <SyntaxHighlighter
        language={language}
        PreTag='div'
        className='!m-0 !bg-transparent'
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </Card>
  );
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-lg max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings avec styles shadcn
          h1: ({ children }) => (
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 mt-8'>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4 mt-8'>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-3 mt-6'>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-4'>
              {children}
            </h4>
          ),

          // Paragraphes
          p: ({ children }) => <p className='leading-7 mb-4'>{children}</p>,

          // Listes
          ul: ({ children }) => (
            <ul className='my-6 ml-6 list-disc space-y-2'>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className='my-6 ml-6 list-decimal space-y-2'>{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,

          // Code blocks avec syntax highlighting
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const codeString = String(children).replace(/\n$/, '');

            if (language) {
              return <CodeBlock language={language}>{codeString}</CodeBlock>;
            }

            return (
              <code
                className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
                {...props}
              >
                {children}
              </code>
            );
          },

          // Blockquotes
          blockquote: ({ children }) => (
            <Card className='my-6 border-l-4 border-primary'>
              <div className='p-4 italic text-muted-foreground bg-muted/50'>
                {children}
              </div>
            </Card>
          ),

          // Séparateurs
          hr: () => <Separator className='my-8' />,

          // Liens
          a: ({ href, children }) => (
            <a
              href={href}
              className='font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              {children}
            </a>
          ),

          // Images
          img: ({ src, alt }) => (
            <Card className='my-6 overflow-hidden'>
              <Image
                src={src as string}
                alt={alt as string}
                width={600}
                height={400}
                className='w-full h-auto object-cover'
              />
              {alt && (
                <div className='p-2 text-sm text-muted-foreground text-center bg-muted'>
                  {alt}
                </div>
              )}
            </Card>
          ),

          // Tables
          table: ({ children }) => (
            <Card className='my-6 overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='w-full'>{children}</table>
              </div>
            </Card>
          ),
          thead: ({ children }) => (
            <thead className='bg-muted'>{children}</thead>
          ),
          th: ({ children }) => (
            <th className='px-4 py-2 text-left font-semibold'>{children}</th>
          ),
          td: ({ children }) => (
            <td className='px-4 py-2 border-t'>{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
