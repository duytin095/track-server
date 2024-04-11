const mongoose = require('mongoose');
 const useSchema = new mongoose.Schema({
    email:{
        type: String,
         unique: true,
         require:true,
    }, 
    pasword:{
        type: String,
        require: true
    }
 });

 mongoose.model('User', useSchema);