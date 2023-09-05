const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    image : {
    type : String,
    default : null
},
    latitute : {
    type : String,
    default : null
},
    longitute : {
    type : String,
    default : null
},
    title : {
    type : String,
    default : null
},
    phone : {
    type : String,
    default : null
},
    content : {
    type : String,
    default : null
},
    userRating : {
    type : String,
    default : null
},
    categoryID :[{
    type: Schema.Types.ObjectId,
    ref: 'Category',
}],
},
{  
    timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});

const product = new mongoose.model('Product', schema);
module.exports = product;