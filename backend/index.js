const express = require("express");
const dotenv = require("dotenv");
const mongoose =  require('mongoose');
const app = express();
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json);
 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("bd is conected");
}

app.post("pins");

app.use("/api/pins", pinRoute)

app.listen(8080, () =>{
    console.log("Backend service is running");
})


