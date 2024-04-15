import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema, "user");

export default User;
