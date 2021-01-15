export const sendUpvote = async (postId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        action: "upvote",
        postID: postId,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const sendComment = async (postId, input) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        action: "comment",
        postID: postId,
        body: input,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const sendDownvote = async (postId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        action: "downvote",
        postID: postId,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const starPost = async (postId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        action: "star",
        postID: postId,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};
