import { StringableActionCreator } from "@redux-saga/types";
import axios from "axios";
import { ResponsiveEmbed } from "react-bootstrap";

// 회원가입 리퀘스트 객체 데이터 인터페이스
interface SignupRequestDto {
  email: string;
  password: string;
  nickname: string;
}

// 로그인 리스폰스 객체 데이터 인터페이스
interface LoginRequestDto {
  email: string;
  nickname: string;
}

// 회원가입 데이터 인터페이스
interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

interface LoginData {
  email: string;
  password: string;
}

// 회원 가입 요청
export const signup = async (signupData: SignupData) => {
  var result = -1;
  const request: SignupRequestDto = {
    email: signupData.email,
    password: signupData.password,
    nickname: signupData.nickname,
  };
  console.log(request);

  await axios
    .post("http://localhost:8080/api/signup", request)
    .then((res) => {
      result = res.data.result;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

// 로그인 요청
export const login = async (loginData: LoginData) => {
  const request = {
    email: loginData.email,
    password: loginData.password,
  };
  console.log(request);

  const response = await axios
    .post(`http://localhost:8080/api/login`, request)
    .catch((err) => console.log(err));

  console.log(response);
  return response;
};
