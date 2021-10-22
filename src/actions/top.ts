/* ENUM TOP ACTION TYPES */
export enum TopTypes {
  READ_REQUEST = "top/READ_POST",
  READ_SUCCESS = "top/READ_SUCCESS",
  READ_FAILURE = "top/READ_FAILURE",
  SEARCH_REQUEST = "top/SEARCH_POST",
  SEARCH_SUCCESS = "top/SEARCH_SUCCESS",
  SEARCH_FAILURE = "top/SEARCH_FAILURE",
}

/* READ REQUEST ACTION INTERFACE */
export interface ReadAction {
  type: TopTypes.READ_REQUEST;
  payload: null;
}

/* READ SUCCESS ACTION INTERFACE */
export interface ReadSuccessAction {
  type: TopTypes.READ_SUCCESS;
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
  type: TopTypes.READ_FAILURE;
  payload: null;
}

/* POSTS ACTIONS TYPES EXPORT */
export type TopActionTypes = ReadAction | ReadSuccessAction | ReadFailureAction;

/* READ ACTION CREATE FUNCTION */
export const read = (): ReadAction => ({
  type: TopTypes.READ_REQUEST,
  payload: null,
});

/* EXPORT TOP ACTION CREATE FUNCTION */
export const TopActions = {
  read,
};
