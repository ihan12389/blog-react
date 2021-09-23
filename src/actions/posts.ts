/* ENUM POSTS ACTION TYPES */
export enum PostsTypes {
  READ_REQUEST = "posts/READ_POST",
  READ_SUCCESS = "posts/READ_SUCCESS",
}

/* READ REQUEST ACTION INTERFACE */
export interface ReadAction {
  type: PostsTypes.READ_REQUEST;
  payload: null;
}

/* READ SUCCESS ACTION INTERFACE */
export interface ReadSuccessAction {
  type: PostsTypes.READ_SUCCESS;
  payload: [
    {
      postId: string;
      title: string;
      nickname: string;
      date: string;
    }
  ];
}

/* POSTS ACTIONS TYPES EXPORT */
export type PostsActionTypes = ReadAction | ReadSuccessAction;

/* READ ACTION CREATE FUNCTION */
export const read = (): ReadAction => ({
  type: PostsTypes.READ_REQUEST,
  payload: null,
});

/* EXPORT POST ACTION CREATE FUNCTION */
export const PostsActions = {
  read,
};
