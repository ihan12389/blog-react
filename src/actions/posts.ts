/* ENUM POSTS ACTION TYPES */
export enum PostsTypes {
  READ_REQUEST = "posts/READ_POST",
  READ_SUCCESS = "posts/READ_SUCCESS",
  READ_FAILURE = "posts/READ_FAILURE",
  SEARCH_REQUEST = "posts/SEARCH_POST",
  SEARCH_SUCCESS = "posts/SEARCH_SUCCESS",
  SEARCH_FAILURE = "posts/SEARCH_FAILURE",
}

export interface SearchData {
  search: String;
  target: String;
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
      _id: string;
      title: string;
      nickname: string;
      date: string;
    }
  ];
}

/* READ FAILURE ACTION INTERFACEs */
export interface ReadFailureAction {
  type: PostsTypes.READ_FAILURE;
  payload: null;
}

/* SEARCH REQUEST ACTION INTERFACE */
export interface SearchAction {
  type: PostsTypes.SEARCH_REQUEST;
  payload: SearchData;
}

/* SEARCH SUCCESS ACTION INTERFACE */
export interface SearchSuccessAction {
  type: PostsTypes.SEARCH_SUCCESS;
  payload: [
    {
      _id: string;
      title: string;
      nickname: string;
      date: string;
    }
  ];
}

/* SEARCH FAILURE ACTION INTERFACE */
export interface SearchFailureAction {
  type: PostsTypes.SEARCH_FAILURE;
  payload: null;
}

/* POSTS ACTIONS TYPES EXPORT */
export type PostsActionTypes =
  | ReadAction
  | ReadSuccessAction
  | ReadFailureAction
  | SearchAction
  | SearchSuccessAction
  | SearchFailureAction;

/* READ ACTION CREATE FUNCTION */
export const read = (): ReadAction => ({
  type: PostsTypes.READ_REQUEST,
  payload: null,
});

/* SEARCH ACTION CREATE FUNCTION */
export const search = (searchData: SearchData): SearchAction => ({
  type: PostsTypes.SEARCH_REQUEST,
  payload: searchData,
});

/* EXPORT POST ACTION CREATE FUNCTION */
export const PostsActions = {
  read,
  search,
};
