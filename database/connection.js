let mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/booking";

const connectToDB = async () =>{
    
    mongoose
        .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connection established with mongodb server online");
        })
        .catch((err) => {
            console.log("error while connection", err);
        });
}

module.exports = connectToDB;
