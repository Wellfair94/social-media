import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const UserSchema = new mongoose.Schema({
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
    type: Number,
    default: Date.now,
  },
  avatarUrl: String,
  bio: {
    type: String,
    default: "Write something about yourself",
  },
  meta: {
    followers: [String],
    following: [String],
    posts: [String],
    starred: [String],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
