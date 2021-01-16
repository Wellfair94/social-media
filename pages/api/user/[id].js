import User from "@/models/User";
import verifyToken from "@/pages/api/auth/verifyToken";
import dbConnect from "@/utils/dbConnect";
import jwt from "jsonwebtoken";

dbConnect();

export default verifyToken(async (req, res) => {
  if (req.method === "PUT") {
    const profileId = req.body.profileId;

    // Gets user document for the current profile
    const profile = await User.findOne({ _id: profileId });
    if (!profile) res.status(400).send({ message: "Profile doesn't exist" });

    const token = req.headers.authorization;
    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

    // Gets user document for logged in user
    const user = await User.findOne({ _id: _id });
    if (!user) res.status(400).send({ message: "User doesn't exist" });

    const { followers } = profile.meta;
    const { following } = user.meta;

    if (profile.meta.followers.includes(_id)) {
      const removeFollower = followers.filter((item) => item !== _id);
      profile.meta.followers = removeFollower;

      const removeFollowing = following.filter((item) => item !== profileId);
      user.meta.following = removeFollowing;
    } else {
      const addFollower = [...followers, _id];
      profile.meta.followers = addFollower;

      const addFollowing = [...following, profileId];
      user.meta.following = addFollowing;
    }

    try {
      const updatedProfile = await profile.save();
      const updatedUser = await user.save();

      const { _id, username, avatarUrl } = updatedUser;

      if (updatedProfile.meta.followers.includes(_id)) {
        res.send({
          followers: updatedProfile.meta.followers,
          newFollower: {
            _id: _id,
            username: username,
            avatarUrl: avatarUrl,
          },
        });
      } else {
        res.send({
          followers: updatedProfile.meta.followers,
          removedFollower: {
            _id: _id,
          },
        });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
});