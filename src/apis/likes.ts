import axios from "axios";

interface addData {
  uids: Array<String>;
  postId: String;
}

/* READ API FUNCTION */
export const read = async (postId: String) => {
  /* GET RESPONSE */
  const response = await axios
    // .get(`http://localhost:3000/api/likes/${postId}`, {
    .get(`https://lihano-board.herokuapp.com/api/likes/${postId}`, {
      params: {
        postId: postId,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};

/* ADD API FUNCTION */
export const add = async (addData: addData) => {
  const request = {
    postId: addData.postId,
    uids: addData.uids,
  };

  /* GET RESPONSE */
  const response = await axios
    // .post(`http://localhost:3000/api/likes/add`, request)
    .post(`https://lihano-board.herokuapp.com/api/likes/add`, request)
    .catch((err) => {
      console.log(err);
    });

  /* RETURN RESPONSE */
  return response;
};
