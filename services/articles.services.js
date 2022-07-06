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
    async deleteAllarticles (data){
        const newArticle = await Article.deleteMany(data);
        return newArticle;
    } 
};

export default new articleService();