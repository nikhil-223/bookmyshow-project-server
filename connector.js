let mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGOOSE_URI || "mongodb://localhost:27017/booking";
console.log(mongoURI);

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
