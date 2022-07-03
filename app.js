import express from 'express';
import pino from 'pino';
import bodyParser from 'body-parser';
import ejs from 'ejs';


const app = express();
const logger = pino();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
   logger.info (`Server is running on port ${PORT}`);
});