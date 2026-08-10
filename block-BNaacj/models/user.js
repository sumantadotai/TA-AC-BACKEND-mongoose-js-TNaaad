const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    favorites: [String],
    marks: [Number],
    password: {type: String, minlength: 5, maxlength: 15},
    createdAt : new Date(),
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);