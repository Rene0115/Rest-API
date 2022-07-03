import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import databaseConfig from '../config/database.config.js';
import errorMiddleware from './error.middleware.js';


const middleware = (app) => {
    databaseConfig();
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
    app.use(errorMiddleware);
};

export  default middleware;