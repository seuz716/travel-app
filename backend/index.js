const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

const uri = process.env.ATLAS_CONNECTION;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: 
    true });

    const connection = mongoose.connection;


    try{
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
    } catch(e) {
    console.log(e);
    }

   function close_connection() {
    connection.close();
   }


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(3000, () => {
  console.log("Backend server is running!");
});