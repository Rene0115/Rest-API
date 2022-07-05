import express from 'express';  
import articleController from '../controllers/article.controller.js';

const articleRoute = express.Router();
articleRoute.get('/', articleController.getAllarticles);
articleRoute.post('/articles', articleController.create);

export default articleRoute;