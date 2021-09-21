const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// Connecting mongoDB Database
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log("Database sucessfully connected!");
}).catch(error => {
  console.log("Could not connect to database : " + error);
});