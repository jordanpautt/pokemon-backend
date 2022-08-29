import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import config from './config/config';
import routesApi from './api/router';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('port', config.PORT);
app.use('/api', routesApi);

export default app;
