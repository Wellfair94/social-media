import verifyToken from "@/pages/api/auth/verifyToken";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

dbConnect();

export default verifyToken(async (req, res) => {
  if (req.method === "POST") {
    const user = await User.findOne({ _id: req.body.postedBy.user });
    if (!user) return res.status(400).send("User doesn't exist");

    const post = new Post({
      body: req.body.body,
      postedBy: {
        user: user._id,
        username: user.username,
        avatarUrl: user.avatarUrl,
      },
    });

    try {
      const savedPost = await post.save();
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
