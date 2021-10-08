import axios from "axios";

interface addData {
  uids: Array<String>;
  postId: String;
}

/* READ API FUNCTION */
export const read = async (postId: String) => {
  /* GET RESPONSE */
  const response = await axios
    .get(`http://localhost:8080/api/likes/${postId}`, {
      params: {
        postId: postId,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(response);
  /* RETURN */
  return response;
};

/* ADD API FUNCTION */
export const add = async (addData: addData) => {
  console.log(addData.postId);
  console.log(addData.uids);

  const request = {
    postId: addData.postId,
    uids: addData.uids,
  };

  /* GET RESPONSE */
  const response = await axios
    .post(`http://localhost:8080/api/likes/add`, request)
    .catch((err) => {
      console.log(err);
    });

  /* RETURN RESPONSE */
  console.log(response);
  return response;
};
