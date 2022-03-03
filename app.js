const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewareSetUserSession} = require('./src/middlewares/meuMiddleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json())

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareSetUserSession);
app.use(routes);

app.listen(3000);
