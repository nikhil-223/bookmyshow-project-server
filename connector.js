let mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/bookMovie";


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
