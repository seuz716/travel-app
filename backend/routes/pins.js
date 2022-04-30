const mongoose = require ("mongoose");

const PinSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        unique:true,
        min:3
    },
    descripcion:{
        type:String,
        require: true,
        min:5,
        unique:true
    },
    rating:{
        type:String,
        require: true,
        max:6,
        min:0,
        unique:true
    }
},
    {timestamp:true}
);

module.exports = mongoose.model("Pin", PinSchema)