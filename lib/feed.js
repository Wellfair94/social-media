export const sendPost = async (input) => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        body: input,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};
