import { pool } from "../db/pool";
import { CONCERT_QUERIES } from "../db/queries/concertQueries";
import { AppError } from "../utils/AppError";

export interface Concert {
  id: string;
  date: string;
  venue: string;
  link: string;
  created_at: Date;
  updated_at: Date;
  visible: boolean;
}

/**
 * Retrieve all concerts from the database
 * @returns Promise<Concert[]> resolving to an array of concerts
 */
export const getAllConcerts = async (): Promise<Concert[]> => {
  try {
    const result = await pool.query(CONCERT_QUERIES.GET_ALL_CONCERTS);
    return result.rows;
  } catch (error) {
    console.error('DB error:', error);
    throw new AppError("Failed to retrieve concerts", 500);
  }
};