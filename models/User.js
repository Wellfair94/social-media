import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuid(),
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  avatarUrl: String,
  bio: String,
  meta: {
    followers: [String],
    following: [String],
    posts: [String],
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
