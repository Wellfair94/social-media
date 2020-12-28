import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import Comment from "@/models/Comment";

const { Schema } = mongoose;

const PostSchema = new Schema({
  _id: {
    type: String,
    default: uuid(),
  },
  user: {
    id: String,
    username: String,
    avatarUrl: String,
  },
  comments: [Comment],
  upvotes: [String],
  downvotes: [String],
  starredBy: [String],
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
