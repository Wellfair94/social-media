import verifyToken from "@/pages/api/auth/verifyToken";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

dbConnect();

export default verifyToken(async (req, res) => {
  if (req.method === "POST") {
    // Get userID from jwt
    const token = req.headers.authorization;
    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ _id: _id });
    if (!user) return res.status(400).send({ message: "User doesn't exist" });

    const post = new Post({
      body: req.body.body,
      postedBy: {
        _id: user._id,
        username: user.username,
        avatarUrl: user.avatarUrl || undefined,
      },
    });

    try {
      const savedPost = await post.save();

      user.meta.posts.push(savedPost._id);

      const savedUser = await user.save();

      res.json(savedPost);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else if (req.method === "GET") {
    const posts = await Post.find({});

    res.send(posts);
  } else {
    res.status(405).send("Method not allowed");
  }
});
