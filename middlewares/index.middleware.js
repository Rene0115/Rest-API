import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import databaseConfig from '../config/database.config.js';
import errorMiddleware from './error.middleware.js';
import bodyParser from 'body-parser';
import router from '../routes/index.route.js';


const middleware = (app) => {
    databaseConfig();
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
    app.use(router);
    app.use(errorMiddleware);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));

};

export  default middleware;