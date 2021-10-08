/* ENUM likes ACTION TYPES */
export enum LikesTypes {
  WRITE_REQUEST = "likes/WRITE_REQUEST",
  WRITE_SUCCESS = "likes/WRITE_SUCCESS",
  WRITE_FAILURE = "likes/WRITE_FAILURE",
  READ_REQUEST = "likes/READ_likes",
  READ_SUCCESS = "likes/READ_SUCCESS",
  READ_FAILURE = "likes/READ_FAILURE",
  ADD_REQUEST = "likes/ADD_REQUEST",
  ADD_SUCCESS = "likes/ADD_SUCCESS",
  ADD_FAILURE = "likes/ADD_FAILURE",
}

interface AddData {
  postId: String;
  uids: Array<String>;
}

interface ReadSuccessData {
  uids: Array<String>;
}

/* WRITE REQUEST ACTION INTERFACE */
export interface WriteAction {
  type: LikesTypes.WRITE_REQUEST;
  payload: String;
}

/* WRITE SUCCESS ACTION INTERFACE */
export interface WriteSuccessAction {
  type: LikesTypes.WRITE_SUCCESS;
  payload: null;
}

/* WRITE FAILURE ACTION INTERFACE */
export interface WriteFailureAction {
  type: LikesTypes.WRITE_FAILURE;
  payload: null;
}

/* READ REQUEST ACTION INTERFACE */
export interface ReadAction {
  type: LikesTypes.READ_REQUEST;
  payload: String;
}

/* READ SUCCESS ACTION INTERFACE */
export interface ReadSuccessAction {
  type: LikesTypes.READ_SUCCESS;
  payload: ReadSuccessData;
}

/* READ FAILURE ACTION INTERFACE */
export interface ReadFailureAction {
  type: LikesTypes.READ_FAILURE;
  payload: null;
}

export interface AddAction {
  type: LikesTypes.ADD_REQUEST;
  payload: AddData;
}

export interface AddSuccess {
  type: LikesTypes.ADD_SUCCESS;
  payload: Array<String>;
}

export interface AddFailure {
  type: LikesTypes.ADD_FAILURE;
  payload: null;
}

/* likes ACTIONS TYPES EXPORT */
export type LikesActionTypes =
  | WriteAction
  | WriteSuccessAction
  | WriteFailureAction
  | ReadAction
  | ReadSuccessAction
  | ReadFailureAction
  | AddAction
  | AddSuccess
  | AddFailure;

/* WRITE ACTION CREATE FUNCTION */
export const write = (postId: String): WriteAction => ({
  type: LikesTypes.WRITE_REQUEST,
  payload: postId,
});

/* READ ACTION CREATE FUNCTION */
export const read = (postId: String): ReadAction => ({
  type: LikesTypes.READ_REQUEST,
  payload: postId,
});

export const add = (AddData: AddData): AddAction => ({
  type: LikesTypes.ADD_REQUEST,
  payload: AddData,
});

/* EXPORT likes ACTION CREATE FUNCTION */
export const LikesActions = {
  write,
  read,
  add,
};
