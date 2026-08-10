const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb://localhost/assignment-ii",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(user);
    }
  });
});

app.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  //   User.find({ _id: id }, (err, users) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(users);
  //     }
  //   });

  //   User.findOne({ _id: id }, (err, users) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(users);
  //     }
  //   });

  User.findById(id, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.put("/users/:id", (req, res) => {
  let id = req.params.id;

  //   User.update({ _id: id }, req.body, { new: true }, (err, users) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(users);
  //     }
  //   });
  //   User.updateOne({ _id: id }, req.body, { new: true }, (err, users) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200).send(users);
  //     }
  //   });

  User.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
