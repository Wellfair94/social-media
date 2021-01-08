import verifyToken from "@/pages/api/auth/verifyToken";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

dbConnect();

export default verifyToken(async (req, res) => {
  if (req.method === "PUT") {
    const postID = req.body.postID;

    // Get userID from jwt
    const token = req.headers.authorization;
    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

    const post = await Post.findOne({ _id: postID });
    if (!post) return res.status(400).send({ message: "Post doesn't exist" });

    const { meta } = post;
    const { upvotes, downvotes, comments } = meta;

    try {
      // ! Find a shorter hand way of updating posts by each property
      const hasUpvoted = upvotes.includes(_id);
      const hasDownvoted = downvotes.includes(_id);
      const removeUpvote = downvotes.filter((item) => item !== _id);
      const removeDownvote = downvotes.filter((item) => item !== _id);
      const addUpvote = [...upvotes, _id];
      const addDownvote = [...downvotes, _id];

      switch (req.body.action) {
        case "upvote":
          if (hasDownvoted) {
            post.meta.downvotes = removeDownvote;
            post.meta.upvotes = addUpvote;
          } else if (hasUpvoted) {
            post.meta.upvotes = removeUpvote;
          } else {
            post.meta.upvotes = addUpvote;
          }
          break;
        case "downvote":
          if (hasUpvoted) {
            post.meta.upvotes = removeUpvote;
            post.meta.downvotes = addDownvote;
          } else if (hasDownvoted) {
            post.meta.downvotes = removeDownvote;
          } else {
            post.meta.downvotes = addDownvote;
          }
          break;
        default:
        // comment
      }

      const updatedPost = await post.save();

      res.status(200).send({
        test: "testing",
        meta: {
          upvotes: updatedPost.meta.upvotes.length,
          comments: updatedPost.meta.comments,
          downvotes: updatedPost.meta.downvotes.length,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err });
    }
  } else {
    res.status(405).send("Method not allowed");
  }
});
