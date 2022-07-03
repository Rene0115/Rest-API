import mongoose from "mongoose";

const article =  new mongoose. Schema({
   titles: String,
   content: String 
}, { timestamps: true });

export const Article = mongoose.model('Article', article);