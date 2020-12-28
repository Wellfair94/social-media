export default async (req, res) => {
  const { body } = req;

  const { email } = body;

  if (req.method === "POST") {
    res.json(body);
  } else {
    res.status(405).json({
      status: 405,
      message: "Method not allowed",
    });
  }
};
