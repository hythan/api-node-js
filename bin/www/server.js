/*
 * Server: The server is responsible solely for the initialization of the middleware, setting up the engine,
 * and the routes through which requests are made. These routes consist of the main application or function logic.
*/
import app from '../../app.js';

app.listen(3000, () => {
  console.log("Expresser server now is running on localhost:3000");
});
