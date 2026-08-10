const express = require("express");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/assignment-1",
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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});
