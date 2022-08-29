import User from '../../domain/models/user.model';
import { IUser } from './../../domain/interfaces/user.interface';
import { generateJWT } from '../../libraries/tools/jwt-create';

const login = async (userData: Pick<IUser, 'name' | 'password'>) => {
  if (!userData.name || !userData.password) {
    throw new Error('Please enter your name or password.');
  }

  const user = await User.findOne({ name: userData.name });
  if (!user) {
    throw new Error('User does not exist.');
  }

  const isMatch = await user.comparePassword(userData.password);
  if (!isMatch) {
    throw new Error('The name or password is incorrect.');
  }
  const token = generateJWT(
    { name: userData.name },
    process.env.JWT_SECRET || 'somesecrettoken'
  );
  return { name: user.name, token };
};

const register = async (userData: IUser) => {
  if (!userData.name || !userData.password) {
    throw new Error('Please enter your name or password.');
  }

  const user = await User.findOne({ name: userData.name });
  if (user) {
    throw new Error('The user already exists.');
  }

  const token = generateJWT(
    { name: userData.name },
    process.env.JWT_SECRET || 'somesecrettoken'
  );

  const newUser = new User(userData);
  await newUser.save();

  return { newUser, token };
};

export default {
  login,
  register,
};
