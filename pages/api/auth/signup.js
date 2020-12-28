import User from "@/models/User";

export default async (req, res) => {
  if (req.method === "POST") {
    res.json({ test: "test" });
  } else {
    res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }
};
