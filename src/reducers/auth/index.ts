import { AuthTypes, AuthActionTypes } from "../../actions/auth";

export interface AuthState {
  uid: string | undefined;
  email: string | undefined;
  nickname: string | undefined;
  loggingIn: boolean;
  loginFailureMsg: string;
}

// Auth의 Store 데이터
const initialState: AuthState = {
  uid: undefined,
  email: undefined,
  nickname: undefined,
  loggingIn: false,
  loginFailureMsg: "",
};

// Auth Saga Redux의 Reducer
const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    // 로그인 요청
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    // 로그인 성공
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        uid: action.payload.uid,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    // 로그인 실패
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loginFailureMsg: action.payload,
      };
    // 오류 메세지 변경
    case AuthTypes.CHANGE_MESSAGE:
      return {
        ...state,
        loginFailureMsg: action.payload,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        email: undefined,
        uid: undefined,
        nickname: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
