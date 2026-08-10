const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  type: String,
});

export default mongoose.model("Article", articleSchema);
