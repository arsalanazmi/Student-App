let express = require("express");
let cors = require("cors");

// Environmental Variables
require('dotenv').config()
// Database Connection
const database = require('./database/db');
// Express Route
const studentRoute = require("./routes/student.route");
// PORT
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use("/students", studentRoute);

if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});