const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    cityName : {
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
    isStatus : {
    type : Boolean,
    default : true
},

},
{  
    timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});

const location = new mongoose.model('Location', schema);
module.exports = location;