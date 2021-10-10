import axios from "axios";

interface WriteData {
  postId: String;
  comments: Array<Object>;
}

/* READ API FUNCTION */
export const read = async (postId: String) => {
  /* GET RESPONSE */
  const response = await axios
    .get(`https://lihano-board.herokuapp.com/api/comment/${postId}`, {
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

/* WRITE API FUNCTION */
export const write = async (writeData: WriteData) => {
  const request = {
    postId: writeData.postId,
    comments: writeData.comments,
  };

  /* GET RESPONSE */
  const response = await axios
    .post(`https://lihano-board.herokuapp.com/api/comment/write`, request)
    .catch((err) => {
      console.log(err);
    });

  /* RETURN RESPONSE */
  return response;
};
