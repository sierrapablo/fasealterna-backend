import { NextFunction, Request, Response } from "express";
import * as concertServices from "../services/concertServices";

/**
 * Get all concerts
 */
export const getAllConcerts = async (
  _req: Request, res: Response, next: NextFunction
): Promise<void> => {
  try {
    const concerts = await concertServices.getAllConcerts();
    res.status(200).json(concerts);
  } catch (error) {
    next(error);
  }
};