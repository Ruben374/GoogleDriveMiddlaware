import express from 'express';
import { Request, Response } from 'express';
require('dotenv').config({path:__dirname+'./../.env'})

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(process.env.Nome);
});

app.listen(process.env.PORT, () => {
  console.log('Application started on port 3000!');
});