import express from 'express';
import pino from 'pino';
import ejs from 'ejs';
import dotenv from 'dotenv';
import middleware from './middlewares/index.middleware.js';


const app = express();
export const logger = pino();
dotenv.config();


app.set('view engine', 'ejs');


middleware(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
   logger.info (`Server is running on port ${PORT}`);
});