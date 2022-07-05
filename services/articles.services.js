import {Article} from "../models/articles.model.js";

class articleService {
    async getAllArticle (data){
 const articles = await Article.find({data});
return articles; 
};
};

export default new articleService();