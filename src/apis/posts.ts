import axios from "axios";

interface SearchData {
  search: String;
  target: String;
}

/* READ API FUNCTION */
export const read = async () => {
  /* GET RESPONSE */
  const response = await axios
    // .get("http://localhost:3000/api/posts")
    .get(`https://lihano-board.herokuapp.com/api/posts`)
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};

/* SEARCH API FUNCTION */
export const search = async (searchData: SearchData) => {
  /* GET RESPONSE */
  const response = await axios
    .get(
      `https://lihano-board.herokuapp.com/api/search/${searchData.search}&&${searchData.target}`,
      {
        params: {
          search: searchData.search,
          target: searchData.target,
        },
      }
    )
    .catch((err) => {
      console.log(err);
    });
  /* RETURN RESPONSE */
  return response;
};
