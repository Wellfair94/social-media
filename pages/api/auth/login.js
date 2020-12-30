import dbConnect from "@/utils/dbConnect";
import Joi from "@hapi/joi";
import User from "@/models/User";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

dbConnect();

const schema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("User doesn't exist");

    const validPassword = await bycrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Incorrect username or password");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    //   expiresIn: "1h",
    // });

    res.setHeader("authorization", token);
    res.send({
      token: token,
      user: user._id,
      username: user.username,
      bio: user.bio,
      meta: user.meta,
      avatarUrl: user.avatarurl,
    });
  } else {
    res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }
};
