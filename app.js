// App: The ‘app’ file contain the main business logic of the web application and is
// responsible for its execution. It also contains access to the backend database and
// data models. The ‘app’ consists of two main components – routes and controllers.

import express from 'express';
import './config/enviroment.js';
import routes from './config/routes.js';

const app = express();

// expects request data to be sent in JSON format, which often resembles a simple JS object: 
app.use(express.json())
app.use(routes);

export default app;
