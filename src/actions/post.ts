/* ENUM POST ACTION TYPES */
export enum PostTypes {
  WRITE_REQUEST = "post/WRITE_REQUEST",
  WRITE_SUCCESS = "post/WRITE_SUCCESS",
  WRITE_FAILURE = "post/WRITE_FAILURE",
  CHANGE_MESSAGE = "post/CHANGE_MESSAGE",
  READ_REQUEST = "post/READ_POST",
  READ_SUCCESS = "post/READ_SUCCESS",
  READ_FAILURE = "post/READ_FAILURE",
}
/* WRITE DATA INTERFACE */
export interface WriteData {
  title: string;
  content: string;
  uid: string | undefined;
  nickname: string | undefined;
  date: string;
  previewImg: string;
  likes: number;
}

export interface WriteSuccessData {
  message: string;
  postId: string;
}

/* WRITE REQUEST ACTION INTERFACE */
export interface WriteAction {
  type: PostTypes.WRITE_REQUEST;
  payload: WriteData;
}

/* WRITE SUCCESS ACTION INTERFACE */
export interface WriteSuccessAction {
  type: PostTypes.WRITE_SUCCESS;
  payload: WriteSuccessData;
}

/* WRITE FAILURE ACTION INTERFACE */
export interface WriteFailureAction {
  type: PostTypes.WRITE_FAILURE;
  payload: string;
}

/* MESSAGE CHANGE ACTION INTERFACE */
export interface ChangeMessageAction {
  type: PostTypes.CHANGE_MESSAGE;
  payload: string;
}

/* READ REQUEST ACTION INTERFACE */
export interface ReadAction {
  type: PostTypes.READ_REQUEST;
  payload: string;
}

/* READ SUCCESS ACTION INTERFACE */
export interface ReadSuccessAction {
  type: PostTypes.READ_SUCCESS;
  payload: {
    postId: string;
    title: string;
    content: string;
    uid: string;
    nickname: string;
    date: string;
    likes: number;
  };
}

/* READ FAILURE ACTION INTERFACE */
export interface ReadFailureAction {
  type: PostTypes.READ_FAILURE;
  payload: string;
}

/* POST ACTIONS TYPES EXPORT */
export type PostActionTypes =
  | WriteAction
  | WriteSuccessAction
  | WriteFailureAction
  | ChangeMessageAction
  | ReadAction
  | ReadSuccessAction
  | ReadFailureAction;

/* WRITE ACTION CREATE FUNCTION */
export const write = (writeData: WriteData): WriteAction => ({
  type: PostTypes.WRITE_REQUEST,
  payload: writeData,
});

/* READ ACTION CREATE FUNCTION */
export const read = (readData: string): ReadAction => ({
  type: PostTypes.READ_REQUEST,
  payload: readData,
});

/* EXPORT POST ACTION CREATE FUNCTION */
export const PostActions = {
  write,
  read,
};
