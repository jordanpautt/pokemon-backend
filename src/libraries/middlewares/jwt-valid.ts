import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  let tokenBearer: string | null | undefined = req.header('Authorization');

  try {
    tokenBearer =
      tokenBearer && tokenBearer.startsWith('Bearer ')
        ? tokenBearer.replace('Bearer ', '')
        : null;
    if (!tokenBearer) throw new Error('Jwt not valid.');
    jwt.verify(tokenBearer, process.env.JWT_SECRET || 'somesecrettoken');
  } catch (error) {
    return next({ error });
  }
  return next();
};

export default {
  validateJWT,
};
