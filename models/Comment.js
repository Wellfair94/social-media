import { string } from "@hapi/joi";
import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const CommentSchema = new Schema({
  _id: {
    type: String,
    default: uuid(),
  },
  createdOn: {
    type: Number,
    default: Date.now(),
  },
  postedBy: {
    type: { user: String, username: String, avatarUrl: String },
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
