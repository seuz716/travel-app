const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        require:true,
        min:3,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:20,
        
    },
},{timestamps:true})


module.exports = mongoose.model("User", userSchema);