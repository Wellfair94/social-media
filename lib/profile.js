export const followProfile = async (profileId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/user/${profileId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        profileId: profileId,
      }),
    }).then((res) => res.json());

    return res;
  } catch (err) {
    console.log(err);
  }
};
