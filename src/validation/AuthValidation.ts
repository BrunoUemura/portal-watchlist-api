import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '@src/util/error/UnauthorizedError';

export const authMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new UnauthorizedError('Missing JWT token');
    }

    const token = authorization.replace('Bearer', '').trim();
    if (!token) {
      throw new UnauthorizedError('Missing JWT token');
    }

    jwt.verify(token, String(process.env.JWT_SECRET));

    return next();
  } catch (error) {
    next(error);
  }
};
