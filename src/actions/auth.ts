/* ENUM AUTH ACTION TYPES */
export enum AuthTypes {
  LOGIN_REQUEST = "auth/LOGIN_REQUEST",
  LOGIN_SUCCESS = "auth/LOGIN_SUCCESS",
  LOGIN_FAILURE = "auth/LOGIN_FAILURE",
  LOGOUT = "auth/LOGOUT",
  CHANGE_MESSAGE = "auth/CHANGE_MESSAGE",
}
/* LOGIN DATA INTERFACE */
export interface LoginData {
  email: string;
  password: string;
}
/* LOGIN REQUEST ACTION INTERFACE */
export interface LoginAction {
  type: AuthTypes.LOGIN_REQUEST;
  payload: LoginData;
}
/* LOGIN SUCCESS ACTION INTERFACE */
export interface LoginSuccessAction {
  type: AuthTypes.LOGIN_SUCCESS;
  payload: {
    uid: string;
    email: string;
    password: string;
    nickname: string;
  };
}
/* LOGIN FAILURE ACTION INTERFACE */
export interface LoginFailureAction {
  type: AuthTypes.LOGIN_FAILURE;
  payload: string;
}
/* LOGOUT ACTION INTERFACE */
export interface LogoutAction {
  type: AuthTypes.LOGOUT;
}
/* CHANGE MESSAGE ACTION INTERFACE */
export interface ChangeMessageAction {
  type: AuthTypes.CHANGE_MESSAGE;
  payload: string;
}
/* AUTH ACTION TYPES EXPORT */
export type AuthActionTypes =
  | LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | ChangeMessageAction;
/* LOGIN REQUEST ACTION CREATE FUNCTION */
export const login = (loginData: LoginData): LoginAction => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: loginData,
});
/* LOGOUT ACTION CREATE FUNCTION */
export const logout = (): LogoutAction => ({
  type: AuthTypes.LOGOUT,
});
/* EXPORT AUTH ACTION CREATE FUNCTION */
export const AuthActions = {
  login,
  logout,
};
