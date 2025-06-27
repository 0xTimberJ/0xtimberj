// src/lib/pocketbase-client.ts
import PocketBase from 'pocketbase';

import { serverEnv } from '@/config/server-env';
import { POCKETBASE_URL as POCKETBASE_URL_CONSTANT } from '@/constant';

const { POCKETBASE_TOKEN, POCKETBASE_URL } = serverEnv;

// Use the provided URL or fallback to api.beswib.com for server-side operations
const pocketbaseUrl = POCKETBASE_URL ?? POCKETBASE_URL_CONSTANT;

if (!pocketbaseUrl) {
  throw new Error('PocketBase URL is required');
}

// Initialize PocketBase client
export const pb = new PocketBase(pocketbaseUrl);

pb.autoCancellation(false);

// For server-side operations, authenticate with admin token
if (POCKETBASE_TOKEN != null && POCKETBASE_TOKEN !== '') {
  pb.authStore.save(POCKETBASE_TOKEN, null);
  console.info('PocketBase authenticated with admin token');
} else {
  console.warn('POCKETBASE_TOKEN not found - some operations may not work');
}
