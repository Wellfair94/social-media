import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const CommentSchema = new Schema({
  _id: {
    type: String,
    default: uuid(),
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  user: {
    id: String,
    username: String,
    avatarUrl: String,
  },
  body: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
