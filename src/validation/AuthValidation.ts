import { Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../shared/error/UnauthorizedError';

export default class AuthValidation {
  static async validate(req: Request, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        throw new UnauthorizedError('Missing JWT token');
      }

      const token = authorization.replace('Bearer', '').trim();
      jwt.verify(token, String(process.env.JWT_SECRET));

      return;
    } catch (error) {
      next(error);
    }
  }
}
