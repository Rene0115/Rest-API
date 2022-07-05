import express from 'express';
import articleRoute from './articles.route.js';

const router = express.Router();
 router.use('/articles', articleRoute);

export default router;