// 로그인 요청할 때 보내는 데이터 인터페이스
export interface LoginData {
  email: string;
  password: string;
}

// 회원가입 요청할 때 보내는 데이터 인터페이스
export interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

export interface Auth {
  uid: string;
  nickname: string;
}
