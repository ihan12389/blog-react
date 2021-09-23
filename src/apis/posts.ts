import axios from "axios";

/* READ API FUNCTION */
export const read = async () => {
  /* GET RESPONSE */
  const response = await axios
    .get(`http://localhost:8080/api/posts`)
    .catch((err) => {
      console.log(err);
    });
  console.log(response);
  /* RETURN */
  return response;
};
