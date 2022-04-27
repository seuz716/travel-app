const express = require("express");
const dotenv = require("dotenv");
const mongoose =  require('mongoose');
const app = express();
dotenv.config();


 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("bd is conected");
}

app.post("pins");

app.listen(8080, () =>{
    console.log("Backend service is running");
})


