import User from "models/User";
import dbConnect from "utils/dbConnect";
import Joi from "@hapi/joi";
import bycrypt from "bcrypt";

dbConnect();

const schema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(400).send("User with that email already exists");

    const usernameExists = await User.findOne({ username: req.body.username });
    if (usernameExists)
      return res.status(400).send({ message: "That username is taken" });

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(req.body.password, salt);

    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    try {
      const savedUser = await user.save();
      res.json({ _id: savedUser._id });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else {
    res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }
};
