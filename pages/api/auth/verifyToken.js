import { send } from "micro";
import jwt from "jsonwebtoken";

export default (fn) => async (req, res) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.TOKEN_SECRET
    );

    if (decoded) return await fn(req, res);
  } catch (err) {
    res.status(401).send("Token invalid");
  }
};
