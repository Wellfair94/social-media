import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  role: {
    type: Number,
    default: 0,
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
    starred: [String],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
