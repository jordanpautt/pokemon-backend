import { Request, Response, NextFunction } from 'express';
import authService from '../../service/auth/auth.service';
import { IUser } from '../../domain/interfaces/user.interface';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await authService.login(userData);
    return res.status(201).json({ result });
  } catch (error) {
    return next(error);
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: IUser = req.body;
    const result = await authService.register(userData);
    return res.status(201).json({ result });
  } catch (error) {
    return next(error);
  }
};

export default {
  login,
  register,
};
