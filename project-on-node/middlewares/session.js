import session from 'express-session';

const sessionMiddleware = session({
  secret: process.env.SECRET_KEY , // Make sure to set a proper secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true if you're using HTTPS
});

export default sessionMiddleware;
