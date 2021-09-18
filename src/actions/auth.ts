import { LoginData, Auth } from "../types/auth";

export enum AuthTypes {
  LOGIN_REQUEST = "auth/LOGIN_REQUEST",
  LOGIN_SUCCESS = "auth/LOGIN_SUCCESS",
  LOGIN_FAILURE = "auth/LOGIN_FAILURE",
  LOGOUT = "auth/LOGOUT",
  CHANGE_MESSAGE = "auth/CHANGE_MESSAGE",
}

// 로그인 요청하는 액션의 인터페이스
export interface LoginAction {
  type: AuthTypes.LOGIN_REQUEST;
  payload: LoginData;
}

// 로그인 성공 액션의 인터페이스
export interface LoginSuccessAction {
  type: AuthTypes.LOGIN_SUCCESS;
  payload: {
    uid: string;
    email: string;
    password: string;
    nickname: string;
  };
}

// 로그인 실패 액션의 인터페이스
export interface LoginFailureAction {
  type: AuthTypes.LOGIN_FAILURE;
  payload: string;
}

// 로그아웃 액션의 인터페이스
export interface LogoutAction {
  type: AuthTypes.LOGOUT;
}

// 로그인 실패 등에 따른 메세지
export interface ChangeMessageAction {
  type: AuthTypes.CHANGE_MESSAGE;
  payload: string;
}

export type AuthActionTypes =
  | LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | ChangeMessageAction;

// 로그인 액션 생성 함수
export const login = (loginData: LoginData): LoginAction => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: loginData,
});

// 로그아웃 액션 생성 함수
export const logout = (): LogoutAction => ({
  type: AuthTypes.LOGOUT,
});

export const AuthActions = {
  login,
  logout,
};
