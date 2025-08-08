import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Concert {
  id: string;
  date: Date;
  venue: string;
  link: string;
  visible: boolean;
  created_at: Date;
  updated_at: Date;
}

/**
 * Retrieve all visible concerts from MongoDB using Prisma
 * @returns Promise<Concert[]> resolving to an array of concerts
 */
export const getAllConcerts = async (): Promise<Concert[]> => {
  try {
    const concerts = await prisma.concert.findMany({
      where: { visible: true },
      orderBy: { date: 'desc' },
      select: {
        id: true,
        date: true,
        venue: true,
        link: true,
        visible: true,
        created_at: true,
        updated_at: true,
      },
    });
    return concerts;
  } catch (error) {
    console.error('DB error:', error);
    throw new Error('Failed to retrieve concerts');
  }
};
