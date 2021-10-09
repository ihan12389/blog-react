/* ENUM COMMENT ACTION TYPES */
export enum CommentTypes {
  READ_REQUEST = "comment/READ_REQUEST",
  READ_SUCCESS = "comment/READ_SUCCESS",
  READ_FAILURE = "comment/READ_FAILURE",
  WRITE_REQUEST = "comment/WRITE_REQUEST",
  WRITE_SUCCESS = "comment/WRITE_SUCCESS",
  WRITE_FAILURE = "comment/WRITE_FAILURE",
}

interface WriteData {
  postId: String;
  comments: Array<Object>;
}

interface ReadSuccessData {
  comments: Array<Object>;
}

/* READ REQUEST ACTION INTERFACE */
export interface ReadAction {
  type: CommentTypes.READ_REQUEST;
  payload: String;
}

/* READ SUCCESS ACTION INTERFACE */
export interface ReadSuccessAction {
  type: CommentTypes.READ_SUCCESS;
  payload: ReadSuccessData;
}

/* READ FAILURE ACTION INTERFACE */
export interface ReadFailureAction {
  type: CommentTypes.READ_FAILURE;
  payload: null;
}

export interface WriteAction {
  type: CommentTypes.WRITE_REQUEST;
  payload: WriteData;
}

export interface WriteSuccessAction {
  type: CommentTypes.WRITE_SUCCESS;
  payload: Array<Comment>;
}

export interface WriteFailureAction {
  type: CommentTypes.WRITE_FAILURE;
  payload: null;
}

/* comments ACTIONS TYPES EXPORT */
export type CommentActionTypes =
  | WriteAction
  | WriteSuccessAction
  | WriteFailureAction
  | ReadAction
  | ReadSuccessAction
  | ReadFailureAction;

/* WRITE ACTION CREATE FUNCTION */
export const write = (writeData: WriteData): WriteAction => ({
  type: CommentTypes.WRITE_REQUEST,
  payload: writeData,
});

/* READ ACTION CREATE FUNCTION */
export const read = (postId: String): ReadAction => ({
  type: CommentTypes.READ_REQUEST,
  payload: postId,
});

/* EXPORT COMMENT ACTION CREATE FUNCTION */
export const CommentActions = {
  write,
  read,
};
