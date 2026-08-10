const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/sample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const app = express();
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
