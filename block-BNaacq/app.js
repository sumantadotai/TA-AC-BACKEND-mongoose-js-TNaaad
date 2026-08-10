const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb://localhost/assignment-iii",
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


// ------------------User--------------------
app.post("/users", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.status(201).send(user);
    }
  });
});

app.get("/users", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.put("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(updatedUser);
    }
  });
});
app.delete("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send({ message: ` User ${deletedUser.title} was deleted` });
    }
  });
});


// ------------------Article--------------------

app.post("/articles", (req, res, next) => {
  Article.create(req.body, (err, article) => {
    if (err) {
      next(err);
    } else {
      res.status(201).send(article);
    }
  });
});
app.get("/articles", (req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(articles);
    }
  });
});
app.put("/articles/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      if (err) {
        next(err);
      } else {
        res.status(200).send(updatedArticle);
      }
    }
  );
});
app.delete("/articles/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send({ message: `Article ${deletedArticle.title} was deleted` });
    }
  });
});
// ------------------Comments--------------------
app.post("/comments", (req, res, next) => {
  Comment.create(req.body, (err, comment) => {
    if (err) {
      next(err);
    } else {
      res.status(201).send(comment);
    }
  });
});
app.get("/comments", (req, res, next) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(comments);
    }
  });
});
app.put("/comments/:id", (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        next(err);
      } else {
        res.status(200).send(updatedComment);
      }
    }
  );
});
app.delete("/comments/:id", (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndDelete(id, (err, deletedComment) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send({ message: `Comment ${deletedComment.title} was deleted` });
    }
  });
});

//Error handle middleware
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
