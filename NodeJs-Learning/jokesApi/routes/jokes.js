import express, { Router } from 'express';
import getJokes from '../controller/getJokes.js'



const jokeRouter = Router();

jokeRouter.get("/", getJokes)

export default jokeRouter;