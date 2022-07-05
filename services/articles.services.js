import {Article} from "../models/articles.model.js";

class articleService {
    async getAllArticle (data){
 const articles = await Article.find({data});
return articles; 
}
   async create (data){
    const newArticle = await Article.create(data);
    return newArticle;   
};
};

export default new articleService();