import axios from "axios";

interface SearchData {
  search: String;
  target: String;
}

/* READ API FUNCTION */
export const read = async () => {
  /* GET RESPONSE */
  const response = await axios
    .get(`http://localhost:8080/api/posts`)
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
      `http://localhost:8080/api/search/${searchData.search}&&${searchData.target}`,
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
