// NPM modules
import { Request, Response, NextFunction } from 'express';
import config from 'config';
export const root = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(200).send(`server is up & running`);
};
