/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema({
  name: {
    type     : String,
    unique   : true,
    required : true,
  },
  nickname: {
    type     : String,
    required : true,
  },
  team: {
    type     : String,
    enum     : ['rojo', 'amarillo', 'rojo'],
    required : true,
  },
  last_connection: {
    type    : Boolean,
    default : true,
  },
  password: {
    type     : String,
    required : true,
  },
});

userSchema.pre<IUser>('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);
