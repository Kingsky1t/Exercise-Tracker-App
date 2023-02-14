//importing external libraries
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//including internal libraries
const connectDB = require("./connection");
//constants
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();
app.use(express.json())
app.use(morgan("dev"));
connectDB();

//routes
app.use("/users", require("./routes/users"));
app.use("/exercises", require("./routes/exercises"));

//listening
app.listen(port, () => {
     console.log("app running on http://localhost:5000");
});
