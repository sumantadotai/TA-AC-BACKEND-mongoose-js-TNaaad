const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tags: [String],
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: User },
    comments: String,

  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
