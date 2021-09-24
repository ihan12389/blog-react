import axios from "axios";

/* API REQUEST DTO INTERFACE */
interface WriteRequestDto {
  title: string;
  content: string;
  uid: string | undefined;
  nickname: string | undefined;
  date: string;
  previewImg: string;
  likes: number;
}
/* API FUNCTION PROPS DATA INTERFACE */
interface WriteData {
  title: string;
  content: string;
  uid: string | undefined;
  nickname: string | undefined;
  date: string;
  previewImg: string;
  likes: number;
}
/* WRITE API FUNCTION */
export const write = async (writeData: WriteData) => {
  /* CREATE DTO */
  const request: WriteRequestDto = {
    title: writeData.title,
    content: writeData.content,
    uid: writeData.uid,
    nickname: writeData.nickname,
    date: writeData.date,
    previewImg: writeData.previewImg,
    likes: writeData.likes,
  };
  /* GET RESPONSE */
  const response = await axios
    .post("http://localhost:8080/api/write", request)
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};
/* READ API FUNCTION */
export const read = async (postId: string) => {
  /* GET RESPONSE */
  const response = await axios
    .get(`http://localhost:8080/api/read/${postId}`, {
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

/* DELETE API FUNCTION */
export const postdelete = async (postId: string) => {
  console.log("delete api 실행!");
  console.log(postId);
  /* GET RESPONSE */
  const response = await axios
    .delete(`http://localhost:8080/api/postdelete/${postId}`, {
      params: {
        postId: postId,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  console.log(response);
  return response;
};
