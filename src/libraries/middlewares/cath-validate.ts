// import { IError } from './../../domain/interfaces/error.interface';
import { Response, Request, NextFunction } from 'express';
import errorParser from '../tools/catch-handler-errors';

export default function response(err: any, req: Request, res: Response , next: NextFunction) {
  console.log(Object.entries(err));
  const errorName = err.name as 'AxiosError' |  'PokemonError'; 
  const { status, ...response } = errorParser[errorName](err);
  res.status(status).json({ error: response });
}

