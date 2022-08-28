import { IError } from './../../domain/interfaces/error.interface';
import { Response, Request, NextFunction } from 'express';

export default function response(responseError: unknown, req: Request, res: Response, next: NextFunction) {
  const { message, response, code } = responseError as IError;
  const error = { message, code };
  res.status(response.status).json({ error });
}

