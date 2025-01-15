import { config } from 'dotenv';
import express from 'express';
import jokeRouter from './routes/jokes.js';
config()

const PORT = process.env.PORT || 5000;

const server = express();
server.use(express.json());
server.use(express.static('public'));
server.use('/joke',jokeRouter)

server.listen(PORT, ()=>{
  console.log("Server connected successfully   --on port-" + PORT)
});
