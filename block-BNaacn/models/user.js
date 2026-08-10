const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    //   email: String,
    email: { type: String, lowercase: true },
    //   age: Number,
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
