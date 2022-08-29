import { IUser } from './../../domain/interfaces/user.interface';
import User from '../../domain/models/user.model';
import { generateJWT } from '../../libraries/tools/jwt-create';

const login = async (userData: Pick<IUser, 'name' | 'password'>) => {
  if (!userData.name || !userData.password) {
    throw new Error('Por favor. Ingresar name o password');
  }

  const user = await User.findOne({ name: userData.name });
  if (!user) {
    throw new Error('El usuario no existe.');
  }

  const isMatch = await user.comparePassword(userData.password);
  if (!isMatch) {
    throw new Error('El name o la password es incorrecta.');
  }
  const token = generateJWT(
    { name: userData.name },
    process.env.JWT_SECRET || 'somesecrettoken'
  );
  return { name: user.name, token };
};

const register = async (userData: IUser) => {
  if (!userData.name || !userData.password) {
    throw new Error('Por favor. Ingresar name o password');
  }

  const user = await User.findOne({ name: userData.name });
  if (user) {
    throw new Error('El usuario ya existe.');
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
