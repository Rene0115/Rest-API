import articlesServices from "../services/articles.services.js";
import { Article } from "../models/articles.model.js";
import _ from 'lodash'


class articleController {   
    async create(req, res){  //post
    const data = { title: req.body.title, content: req.body.email};  
    const articles = await articlesServices.create(data);
    if (_.isEmpty(data)){
      return res.status(400).send({
        success: false,
        message: 'Cannot create empty article'
      });
    }
}
    async getAllarticles(req, res){  // get
    const findAllarticles = await Article.find()
    if(_.isEmpty(findAllarticles)){
        return res.status(400).send({
            success: false,
            message: 'No articles exist, create an article before attempting to find'
        });
    }
    return res.send({
        success: true,
        data: findAllarticles
    });
};
};

export default new articleController();
    