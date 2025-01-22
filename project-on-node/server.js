import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectToDB from './connect.js';

import sessionMiddleware from './middlewares/session.js';  // Import sessionMiddleware
import heroRouter from './routes/user.js';
import userRouter from './routes/forUserAuth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app;

connectToDB()
  .then(function (connectMessage) {
    console.log(connectMessage);

    app = express();

    // Use session middleware here
    app.use(sessionMiddleware);  // This will apply the session middleware globally

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Setting the view engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Use the userRouter for routes
    app.use("/",heroRouter)
    app.use(userRouter);

    const port = process.env.PORT || 4000;
    app.listen(port, function () {
      console.log('Server running on PORT no', port);
    });
  })
  .catch(function (err) {
    console.error(err);
  });

export default app;
