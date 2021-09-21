import { AuthTypes, AuthActionTypes } from "../../actions/auth";

/* AUTH STATE INTERFACE */
export interface AuthState {
  uid: string | undefined;
  email: string | undefined;
  nickname: string | undefined;
  loggingIn: boolean;
  loginFailureMsg: string;
}

/* AUTH STORE INITIAL STATE */
const initialState: AuthState = {
  uid: undefined,
  email: undefined,
  nickname: undefined,
  loggingIn: false,
  loginFailureMsg: "",
};

/* AUTH REDUCER */
const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST: // 로그인 요청
      return {
        ...state,
        loggingIn: true,
      };
    case AuthTypes.LOGIN_SUCCESS: // 로그인 성공
      return {
        ...state,
        loggingIn: false,
        uid: action.payload.uid,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    case AuthTypes.LOGIN_FAILURE: // 로그인 실패
      return {
        ...state,
        loggingIn: false,
        loginFailureMsg: action.payload,
      };
    case AuthTypes.CHANGE_MESSAGE: // 메세지 변경
      return {
        ...state,
        loginFailureMsg: action.payload,
      };
    case AuthTypes.LOGOUT: // 로그아웃
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
