//core module
const bodyParser = require("body-parser");

//3rd party module
const connectToDB = require('./connector')
const express = require("express");
const cors = require("cors");

connectToDB();
const app = express();

// constants
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//api routes
app.use("/api", require("./route"));

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));


