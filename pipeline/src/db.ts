/**
 * Prisma client for the pipeline. Kept separate from the app's `lib/prisma.ts`
 * so the pipeline can be run and tested on its own.
 */
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { videoPipelinePrisma?: PrismaClient };

export const prisma: PrismaClient = globalForPrisma.videoPipelinePrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.videoPipelinePrisma = prisma;
}

export type { PrismaClient };
