const express = require("express");
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
      console.log("MongoDB connected");
    }
  }
);

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
