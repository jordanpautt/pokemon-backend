import jwt from 'jsonwebtoken';

export const generateJWT = (payload:object, privateKey:string) =>{
    try {
    const token : string = jwt.sign(payload, privateKey, { expiresIn: '24h' });
    return token;
  } catch (error) {
    console.log('error');
    return error;
  }
};