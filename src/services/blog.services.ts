'use server';

import { RecordModel } from 'pocketbase';

import { pb } from '@/lib/pocketbase-client';
import { BlogPost } from '@/models/blog.model';

const COLLECTION_NAME = 'Blog_0xTimberJ';

/**
 * Get all blog posts from PocketBase sorted (descending) by created date
 * and filter by published = true
 * @returns BlogPost[]
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const records = await pb.collection(COLLECTION_NAME).getFullList({
      sort: '-created',
      filter: 'published = true',
    });

    //map records and remove collectionId, collectionName, expand
    const blogPosts = records.map((record: RecordModel) => {
      const {
        collectionId: _,
        collectionName: __,
        expand: ___,
        ...rest
      } = record;
      return {
        ...rest,
        coverImage: pb.files.getURL(record, record.coverImage),
      };
    });

    return blogPosts as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Get all featured blog posts from PocketBase sorted (descending) by created date
 * and filter by published = true and featured = true
 * @returns BlogPost[]
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const records = await pb.collection(COLLECTION_NAME).getFullList({
      sort: '-created',
      filter: 'published = true && featured = true',
    });

    const blogPosts = records.map((record: RecordModel) => {
      const {
        collectionId: _,
        collectionName: __,
        expand: ___,
        ...rest
      } = record;
      return {
        ...rest,
        coverImage: pb.files.getURL(record, record.coverImage),
      };
    });

    return blogPosts as BlogPost[];
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

/**
 * Get a blog post by slug from PocketBase sorted (descending) by created date
 * and filter by published = true
 * @param slug - The slug of the blog post to get
 * @returns BlogPost | null
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const record = await pb
      .collection(COLLECTION_NAME)
      .getFirstListItem(`slug="${slug}" && published=true`, {
        requestKey: null, // Prevent request deduplication
      });

    const {
      collectionId: _,
      collectionName: __,
      expand: ___,
      ...rest
    } = record;
    return {
      ...rest,
      coverImage: pb.files.getURL(record, record.coverImage),
    } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
