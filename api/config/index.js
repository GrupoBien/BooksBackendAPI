import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
    enviroment: process.env.NODE_ENV || 'local',
  },
  database: {
    PORT: process.env.DATABASE_PORT || 27017,
    NAME: process.env.DATABASE_NAME,
    HOST: process.env.DATABASE_HOST || 'localhost',
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
  },
};
