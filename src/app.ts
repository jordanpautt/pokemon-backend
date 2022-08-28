import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import routesApi from './api/router';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port: number = parseInt(process.env.PORT || '4001', 10);

app.set('port', port);
app.use('/api', routesApi);

export default app;
