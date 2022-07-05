import {Article} from "../models/articlesModel.model.js";

class articleService {
    async getAllArticle (data){
 const articles = await Article.find({data});
return articles; 
};
};

export default new articleService();