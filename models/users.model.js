const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        default : null
    },
    email : {
        type : String,
        default : null
    },
    password : {
        type : String,
        default : null
    }
},
{  
    timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
}
);
const users = new mongoose.model('Users', schema);

module.exports = users;