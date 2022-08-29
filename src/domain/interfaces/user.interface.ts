import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  nickname: string;
  team: 'rojo' | 'azul' | 'amarillo';
  password: string;
  last_connection: boolean;
  token?: string;
  comparePassword: (password: string) => Promise<boolean>;
}
