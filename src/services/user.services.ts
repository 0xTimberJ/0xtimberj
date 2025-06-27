'use server';

import { pb } from '@/lib/pocketbase-client';
import { User } from '@/models/user.model';

const COLLECTION_NAME = 'users';

/**
 * Get a user by id from PocketBase sorted (descending) by created date
 * and filter by published = true
 * @param id - The id of the user to get
 * @returns User | null
 */
export async function getUser(name: string): Promise<User | null> {
  try {
    const record = await pb
      .collection(COLLECTION_NAME)
      .getFirstListItem(`name="${name}"`, {
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
      avatar: pb.files.getURL(record, record.avatar),
    } as User;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
