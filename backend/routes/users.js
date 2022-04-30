const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        max:20,
        min:3,
        unique:true
    },
    email:{
        type:String,
        require: true,
        max:50,
        min:5,
        unique:true
    },
    password:{
        type:String,
        require: true,
        max:20,
        min:6,
        unique:true
    }
},
    {timestamp:true}
);

module.exports = mongoose.model("User", UserSchema)