import mongoose from "mongoose";

const article =  new mongoose. Schema({
   title:{ 
      type: 'String',
      required: true,
      minlength: 7
   },
   content: {
      type: 'String',
      required: true,
      minlength: 7}
}, 
{ timestamps: true });

export const Article = mongoose.model('Article', article);

export default {
   Article
};