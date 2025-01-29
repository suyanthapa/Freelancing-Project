import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectToDB from './connect.js';

import sessionMiddleware from './middlewares/session.js';  // Import sessionMiddleware
import heroRouter from './routes/user.js';
import userRouter from './routes/forUserAuth.js';
import cookieParser from 'cookie-parser';
import jobRouter from './routes/addJob.js';
import freelancerRouter from './routes/forFreelancerAuth.js';
import paymentRouter from './routes/payment.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app;

connectToDB()
  .then(function (connectMessage) {
    console.log(connectMessage);

    app = express();

    // Serve static files from the "public" folder
    app.use('/uploads', express.static('uploads'));
    // app.use('/profile', express.static(path.join(__dirname, 'profile')));
    app.use('/profile', express.static('profile'));
    
    // Use session middleware here
    app.use(sessionMiddleware);  // This will apply the session middleware globally
    app.use(cookieParser())
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
    app.use(jobRouter);
    app.use(paymentRouter);
    app.use(freelancerRouter)
    const port = process.env.PORT || 4000;
    app.listen(port, function () {
      console.log('Server running on PORT no', port);
    });
  })
  .catch(function (err) {
    console.error(err);
  });

export default app;
