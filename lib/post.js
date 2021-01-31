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

// SUPPORTED POST ACTIONS
// "upvote", "downvote", "comment"
export const updatePost = async (action, postId, input) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        action: action,
        postID: postId,
        body: input,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};
