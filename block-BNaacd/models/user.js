const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
