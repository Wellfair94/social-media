import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import Comment from "@/models/Comment";

const { Schema } = mongoose;

const PostSchema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  postedBy: {
    type: String,
    required: true,
  },
  comments: [Comment.schema],
  upvotes: [String],
  downvotes: [String],
  starredBy: [String],
  createdOn: {
    type: Number,
    default: Date.now(),
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
