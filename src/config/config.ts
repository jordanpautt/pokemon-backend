export default {
  jwtSecret : process.env.JWT_SECRET || 'somesecrettoken',
  DB        : {
    URI      : process.env.MONGODB_URI || 'mongodb+srv://admin:0admin2@pruebatecnica.h32exqo.mongodb.net/?retryWrites=true&w=majority',
    USER     : process.env.MONGODB_USER || 'admin',
    PASSWORD : process.env.MONGODB_PASSWORD || '0admin2',
  },
  PORT: parseInt(process.env.PORT || '3001' ,10)
};
