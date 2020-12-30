import verifyToken from "@/pages/api/auth/verifyToken";

export default verifyToken(async (req, res) => {
  res.send("test");
});
