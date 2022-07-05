import express from 'express';  
import articleController from '../controllers/article.controller';

const articleRoute = express.Router();
articleRoute.get('/', articleController.getAllarticles);
articleRoute.post('/articles', articleController.create);
