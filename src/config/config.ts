export default {
  jwtSecret : process.env.JWT_SECRET || 'somesecrettoken',
  DB        : {
    URI      : process.env.MONGODB_URI || 'mongodb://localhost/pruebatecnicaa',
    USER     : process.env.MONGODB_USER || 'admin',
    PASSWORD : process.env.MONGODB_PASSWORD || 'admin',
  },
  PORT: parseInt(process.env.PORT || '4001' ,10)
};
