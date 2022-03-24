import express from 'express';
import './config/enviroment.js';
import routes from './config/routes.js';

const app = express();

app.use(express.json());
app.use(routes);

export default app;