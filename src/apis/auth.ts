import axios from "axios";

/* API REQUEST DTO INTERFACE */
interface SignupRequestDto {
  email: string;
  password: string;
  nickname: string;
}
/* API FUNCTION PROPS LOGIN DATA INTERFACE */
interface SignupData {
  email: string;
  password: string;
  nickname: string;
}
/* API FUNCTION PROPS SIGNUP DATA INTERFACE */
interface LoginData {
  email: string;
  password: string;
}
/* SIGNUP API FUNCTION */
export const signup = async (signupData: SignupData) => {
  // GET REQUEST DTO
  var result = -1;
  const request: SignupRequestDto = {
    email: signupData.email,
    password: signupData.password,
    nickname: signupData.nickname,
  };
  // GET RESPONSE'S RESULT
  await axios
    .post("https://lihano-board.herokuapp.com/api/signup", request)
    .then((res) => {
      result = res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return result;
};
/* LOGIN API FUNCTION */
export const login = async (loginData: LoginData) => {
  // GET REQUEST
  const request = {
    email: loginData.email,
    password: loginData.password,
  };
  // GET RESPONSE
  const response = await axios
    .post(`https://lihano-board.herokuapp.com/api/login`, request)
    .catch((err) => console.log(err));
  // RETURN
  return response;
};
